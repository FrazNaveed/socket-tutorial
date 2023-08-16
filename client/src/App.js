import "./App.css";
import { useEffect } from "react";
import io from "socket.io-client";

function App() {
  const socket = io.connect("http://localhost:3001");
  const sendMessage = () => {
    socket.emit("send_message", { message: "hello" });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input placeholder="Message..." />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
