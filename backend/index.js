import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";

dotenv.config({});

const app = express();
app.use(cors({
    origin:`http://202.14.123.41`,
    methods:["GET","POST","PUT" ,"DELETE"],
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
        origin:`http://202.14.123.41`,
        methods:["GET","POST","PUT" ,"DELETE"],
        credentials:true
    }
})

//202.14.123.41
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
      delete users[socket.id]
      console.log(`${users[socket.id]} disconnected`)
    })

    socket.on("message", ({message, id})=>{
      if(users[id]){
      IO.emit("sendMessage", {message, user: users[id], id})
    }
})

})
