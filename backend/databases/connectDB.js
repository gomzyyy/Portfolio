import mongoose from "mongoose";
import {v2 as cloudinary} from "cloudinary"

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to MongoDB!");
  } catch (error) {
    console.log("Error occured while connecting to MongoDB");
  }
};

export const uploadToCloudinary = async(filePath) =>{
try {
    cloudinary.config({
        cloud_name: 'dgki5gnzf', 
        api_key: '522634375794675', 
        api_secret: process.env.CLOUDINARY_SECRET_API
    })
    const response = await cloudinary.uploader.upload(filePath)       
} catch (error) {
    console.log("Error occured while uploading to Cloudinary");
}
}
