import mongoose, { Schema } from "mongoose";

const connectSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
    },
    phoneNumber: {
      type: String,
      minlength: [10, "Phone number should be atleast 10 character long"],
      maxlength: [10, "Phone number should be atleast 10 character long"],
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
  },
  { timestamps: true }
);

export const ConnectionRequest = mongoose.model(
  "ConnectionRequest",
  connectSchema
);
