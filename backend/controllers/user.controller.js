import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUpController = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      countryCode,
      phoneNumber,
      age,
      gender,
    } = req.body;
    if (!fullName || !email) {
      return res
        .status(400)
        .json({ message: "Username and email are required.", success: false });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password isn't matched with confirmed password.",
        success: false,
      });
    }
    if (password.length > 14 || password.length < 6) {
      return res.status(400).json({
        message: "Passsword either too short or too long;<6-14>",
        success: false,
      });
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      userExists.isKnown = true;
      if (phoneNumber && countryCode) {
        userExists.countryCode = countryCode;
        userExists.phoneNumber = phoneNumber;
      }
      if (age && !userExists.age) {
        userExists.age = age;
      }
      if (gender && !userExists.gender) {
        userExists.gender = gender;
      }
      await userExists.save();
      return res
        .status(400)
        .json({ message: "User already exists with this username." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      password: hashedPassword,
      countryCode: countryCode ?? null,
      phoneNumber: phoneNumber ?? null,
      age: age ?? null,
      gender: gender ?? null,
    });
    return res.status(200).json({ message: "Registration successfull." });
  } catch (error) {
    console.log("Error occured while creating the account: ", error);
    return res.status(400).json({
      message: "Error occured while creating the account",
      success: false,
      error: error.message,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Missing input fields not allowed.", success: false });
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res
        .status(404)
        .json({ message: "No user found with this email.", success: false });
    }
    const passwordOk = await bcrypt.compare(password, userExists.password);
    if (!passwordOk) {
      return res
        .status(400)
        .json({ message: "Incorrect password!", success: false });
    }
    const token = jwt.sign({ userId: userExists._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: true,
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: `Logged in as ${userExists.fullName}`,
      success: true,
    });
  } catch (error) {
    console.log("Error occured while logging in: ", error);
    return res.status(400).json({
      message: "Error occured while logging in",
      success: false,
      error: error.message,
    });
  }
};
