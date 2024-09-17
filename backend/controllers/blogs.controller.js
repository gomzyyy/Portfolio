import { User } from "../models/user.model";
import jwt from "jsonwebtoken";

const blogsController = async (req, res) => {
  try {
    const { image, title, content, disclamer, tags } = req.body;
    const { admin } = req.params;
    const token = req.cookies.token;
    const userAuthorised = jwt.verify(
      token,
      process.env.SECRET_KEY,
      async (error, decode) => {
        if (error) {
          console.log(error);
          return res.status(500).json({
            message: "Error occured while creating Blog",
            success: false,
          });
        }
        const userID = decode.userId;
        const userOk = await User.findById({ userID });
        if (userOk) {
          if (userID !== admin) {
            return res.status(400).json({
              message: "You are not authorised to post a Blog",
              success: false,
            });
          }
          const user = await User.findById({ admin });
          if (!user)
            return res
              .status(404)
              .json({ message: "unauthorised request!", success: false });

          if (!title || !content || !tags) {
            return res.status(400).json({
              message: "Some important fields are missing.",
              success: false,
            });
          }
        }
      }
    );
  } catch (error) {
    console.log(`Error occured while creating a blog: ${error}`);
    return res.status(400).json({
      message: "Error occured while creating a blog",
      success: false,
      error: error.message,
    });
  }
};
