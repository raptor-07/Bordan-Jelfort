import { useState } from "react";
import ChatInterface from "./components/ChatInterface";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="App-Container">
      {start ? (
        <ChatInterface />
      ) : (
        <button onClick={() => setStart(true)}>Let's Chat</button>
      )}
    </div>
  );
}

export default App;
