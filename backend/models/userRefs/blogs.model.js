import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      maxLength: 150,
      required: [true, "Label should not exceed 150 letters."],
    },
    content: {
      type: String,
      required: [true, "Content must be given to post a Blog."],
    },
    disclamer:{
      type:String,
      maxLength: [300, "Disclamer should not exceed 300 letters."],
    },
    tags: [{
      type: String,
      required: [true, "Tags must be given to a Blog."],
      maxLength,
    }],
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    }],
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
