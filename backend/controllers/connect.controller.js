import { ConnectionRequest } from "../models/connect.model.js";
import { User } from "../models/user.model.js";

export const connectController = async (req, res) => {
  try {
    const {
      fullName,
      countryCode,
      phoneNumber,
      email,
      socialHandleId,
      socialHandleType,
      feedback,
    } = req.body;

    if (!fullName.trim() || !email.trim()) {
      return res.status(400).json({
        message: "Full name and Email is Required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    const alreadyRequested = await ConnectionRequest.findOne({ email });

    let getCountryCode = countryCode;
    let getPhoneNumber = phoneNumber;
    let getsocialHandleId = socialHandleId;
    let getSocialHandleType = socialHandleType;

    if (user) {
      user.isKnown = true;
      if (!phoneNumber || !countryCode) {
        if (user.phoneNumber && user.countryCode) {
          getCountryCode = user.countryCode;
          getPhoneNumber = user.phoneNumber;
        }
      }
      if (!socialHandleId || !socialHandleType) {
        if (user.socialHandleId && user.socialHandleType) {
          getsocialHandleId = user.socialHandleId;
          getSocialHandleType = user.socialHandleType;
        }
      }
      await user.save();
      if (alreadyRequested) {
        if (feedback && feedback.length > 10) {
          alreadyRequested.feedback = [...alreadyRequested.feedback, feedback];
          await alreadyRequested.save();
          return res.status(200).json({
            message: `Welcome back ${user.fullName}, Thanks for yout feedback.`,
            success: true,
          });
        }
        return res.status(200).json({
          message: `Welcome back ${user.fullName}, your request has been recorded`,
          success: true,
        });
      }
    }

    if (!user && !alreadyRequested) {
      await User.create({
        fullName: fullName ? fullName : "",
        email,
        countryCode: getCountryCode ?? null,
        phoneNumber: getPhoneNumber ?? null,
        socialHandleId: getsocialHandleId ?? null,
        socialHandleType: getSocialHandleType ?? null,
        feedback,
      });

      await ConnectionRequest.create({
        fullName,
        email,
        countryCode: getCountryCode ?? null,
        phoneNumber: getPhoneNumber ?? null,
        socialHandleId: getsocialHandleId ?? null,
        socialHandleType: getSocialHandleType ?? null,
        feedback,
      });
    }
    return res.status(201).json({
      message: "Connection request sent successfully.",
      success: true,
    });
  } catch (error) {
    console.log(`Error occured while sending the request: ${error}`);
    return res.status(400).json({
      message: "Error occured while sending the request",
      success: false,
      error: error.message,
    });
  }
};
