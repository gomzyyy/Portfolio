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
        origin:[`http://localhost:5173`, `https://remarkable-dusk-d9cdc3.netlify.app/`],
        credentials:true
    }
})
let users = [{}]

IO.on("connection", (socket)=>{
    console.log(`new connection`)

    socket.on("joined", ({NAME})=>{
         users[socket.id] = NAME;
         console.log(`${NAME} has joined the chat.`)
         socket.emit("greeting", {user:"Admin", message: `welcome to the chat, ${users[socket.id]}.`})
         socket.broadcast.emit("userJoined", {user:"Admin", message:`${users[socket.id]} has joined.`})
    })
    socket.on("left", ()=>{
      socket.broadcast.emit("userLeft", {user:"Admin", message:`${users[socket.id]} has left the chat.`})
      console.log(`${users[socket.id]} disconnected`)
    })

    socket.on("message", ({message, id})=>[
      IO.emit("sendMessage", {message, user: users[id], id})
    ])

})
