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
    password: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      default:"+91"
    },
    phoneNumber: {
      type: String,
      minlength: [10, "Phone number should be atleast 10 character long."],
      maxlength: [10, "Phone number should be atleast 10 character long."],
    },
    age: {
      type: Number,
    },
    gender: {
      type:String,
      enum:["male", "female", "others"],
      default:"N/A"
    },
    socialHandleId: {
      type: String,
    },
    socialHandleType: {
      type: String,
    },
    feedback: {
      type: String,
      maxlength: 300,
      minlength: 10,
    },
    niche: {
     type:String,
     maxlength:20
    },
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
        ref: "Blog",
      },
    ],
    Message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    savedBlogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
