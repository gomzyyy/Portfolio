import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";

dotenv.config({});

const app = express();
app.use(cors({
    origin:`http://localhost:5173`,
    credentials:true
}));

app.get("/", (req, res) => {
  res.send({ message: "server running successfully" });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`server running at Port ${PORT}`);
});

const IO = new Server(server, {
    cors:{
        origin:`http://localhost:5173`,
        credentials:true
    }
})
let users

IO.on("connection", (socket)=>{
    console.log(`connection established with ${socket.id}`)

    socket.on("user-joined", ({fullName})=>{
      console.log(`${fullName} has joined`)
    })
    socket.on("message", ({message})=>{
      console.log(message)
    })
})
