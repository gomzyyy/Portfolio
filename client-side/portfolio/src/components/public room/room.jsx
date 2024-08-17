import { ChatLogin, ChatRoom } from "./context-room";

const Room = () => {
  const [userData, setUserData] = useState(null);
  const login = false;

  const handleUserInfo = (fullName, gender) => {
    const userData = { fullName, gender };
    setUserData(userData);
  };

  return (
    <main className="main room">
      {login && <ChatLogin handleUserInfo={handleUserInfo} />}
      <ChatRoom userData={userData} />
    </main>
  );
};

export default Room;
