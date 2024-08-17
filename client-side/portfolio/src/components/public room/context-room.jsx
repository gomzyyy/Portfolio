import "./room.css";
import "./room-responsive.css";
import "../global.css";
import { Link } from "react-router-dom";
import { closeBtn } from "../../assets/data";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";


export const ChatLogin = () => {

  const fullName = useRef();

  const handleUser = () => {
    const userName = fullName.current.value
   localStorage.setItem("userName", userName);
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
              ref={fullName}
              placeholder="username (required)"
              required
            />
            <button className="chat-form-submit" type="" onClick={handleUser}>
              <Link to="/public/chat" className="LINK">Enter Room</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export const ChatRoom = () => {
  const inputMessage = useRef("");
  const [message, setMessage] = useState([])

  const handleSendBtn = () => {
    setMessage(inputMessage.current.value)
  };

  const fullName = localStorage.getItem("userName")

console.log(fullName)

  useEffect(() => {
    const socket = io(`http://localhost:4400/`);

    socket.emit("user-joined", fullName);
    socket.emit("message", message)
  }, [message]);

  return (
    <main className="main room">
    <div className="chat-room">
      <div className="chat-container">
        <div className="chat-header">
          <span className="chat-lable">Public room</span>
          <Link to="/public/login" className="LINK col-black">
            <div
              dangerouslySetInnerHTML={{ __html: closeBtn }}
              className="close-btn"
            />
          </Link>
        </div>
        <div className="chat-message-container">
          <span className="guidelines">Be polite while conversation.</span>
          <span className="text-message-info">
            <span className="text-message-name">chris: </span>
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
