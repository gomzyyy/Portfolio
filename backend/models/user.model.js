import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    countryCode: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      minlength: [10, "Phone number should be atleast 10 character long"],
      maxlength: [10, "Phone number should be atleast 10 character long"]
    },
    socialHandleId: {
      type: String,
    },
    socialHandleType: {
      type: String,
    },
    feedback: [
      {
        type: String,
        maxlength: 300,
        minlength: 10,
      },
    ],
    isKnown: {
        type: Boolean,
        default: false,
      },
    isVerified: {
      type: Boolean,
      default: false,
    },
    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogs",
      },
    ],
    Message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
