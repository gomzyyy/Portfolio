import "./message.css";

const Message = ({message, user}) => {
  return (
    <div className="text-message-info">
      <span className="text-message-name">{!user ? "You" : user}: </span>
      <span className="text-message">{message}</span>
    </div>
  );
};
export default Message;
