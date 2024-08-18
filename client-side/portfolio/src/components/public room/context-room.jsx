import "./room.css";
import "./room-responsive.css";
import "../global.css";
import { Link, useNavigate } from "react-router-dom";
import { closeBtn } from "../../assets/data";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const ChatLogin = () => {
  const userName = useRef("");
  const navigate = useNavigate();

  const handleUser = () => {
    if (userName.current.value === "") {
      alert("username required");
      return null;
    }
    if (userName.current.value.length > 14) {
      alert("username exceeding the max character limit : 14");
      userName.current.value = "";
      return null;
    }
    localStorage.setItem("userName", userName.current.value);
    userName.current.value = "";
    navigate("/public/chat");
  };

  return (
    <main className="main room">
      <div>
        <div className="login-form-container">
          <div className="chat-login-form">
            <span className="login-form-lable">Login to Public-Chat</span>
            <input
              type="text"
              className="chat-name"
              name="getName"
              placeholder="username (required)"
              ref={userName}
              required
            />
            <button className="chat-form-submit" onClick={handleUser}>
              Enter Room
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

import { useContext } from "react";
import MutualStates from "../../contextAPI";

const BACKENDURL = `http://localhost:4400/`;
let socket;

export const ChatRoom = () => {
  const { handleChatState } = useContext(MutualStates);
  const NAME = localStorage.getItem("userName");
  const [id, setId] = useState("");

  useEffect(() => {
    socket = io(BACKENDURL, { transports: ["websocket"] });
    socket.on("connect", () => {
      alert("connected to chat");
      setId(socket.id);
    });

    socket.emit("joined", { NAME });

    socket.on("greeting", (data) => {
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      console.log(data.user, data.message);
    });

    socket.on("userLeft", (data) => {
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit("left");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      console.log(data.message, data.user, data.id);
    });
  }, []);

  const inputMessage = useRef("");
  const handleSendBtn = () => {
    let message = inputMessage.current.value;
    socket.emit("message", { message, id });
    inputMessage.current.value = ""
  };
  const handleCloseChat = () => {
    handleChatState();
    localStorage.removeItem("userName");
  };

  return (
    <main className="main room">
      <div className="chat-room">
        <div className="chat-container">
          <div className="chat-header">
            <span className="chat-lable">Public room</span>
            <Link to="/" className="LINK col-black">
              <div
                dangerouslySetInnerHTML={{ __html: closeBtn }}
                className="close-btn"
                onClick={handleCloseChat}
              />
            </Link>
          </div>
          <div className="chat-message-container">
            <span className="guidelines">Be polite while conversation.</span>
            <span className="text-message-info">
              <span className="text-message-name">You: </span>
              <span className="text-message">hello, nice to meet you</span>
            </span>
          </div>
          <div className="chat-message-input">
            <input type="text" className="get-message" ref={inputMessage} />
            <button className="send-message" onClick={handleSendBtn}>
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
