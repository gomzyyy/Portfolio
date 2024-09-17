import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Route from "./routers/router.js";
import { connectDB } from "./databases/connectDB.js";
import { Server } from "socket.io";

// configs
dotenv.config({});

// constants
const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: `*`,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

// middlewares
app.use(cors(corsOptions));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send({ message: "server running successfully" });
});
app.use("/api", Route);

// server
const server = app.listen(PORT, () => {
  console.log(`server running at Port ${PORT}`);
  connectDB();
});

// socket constants
const SocketCors = {
  cors: {
    origin: `*`,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
};

// Socket server
const IO = new Server(server, SocketCors);

let users = [{}];

IO.on("connection", (socket) => {
  socket.on("joined", ({ NAME }) => {
    users[socket.id] = NAME;
    socket.emit("greeting", {
      user: "Admin",
      message: `welcome to the chat, ${users[socket.id]}.`,
    });
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `${users[socket.id]} has joined.`,
    });
  });
  socket.on("left", () => {
    socket.broadcast.emit("userLeft", {
      user: "Admin",
      message: `${users[socket.id]} has left the chat.`,
    });
    delete users[socket.id];
  });

  socket.on("message", ({ message, id }) => {
    if (users[id]) {
      IO.emit("sendMessage", { message, user: users[id], id });
    }
  });
});
