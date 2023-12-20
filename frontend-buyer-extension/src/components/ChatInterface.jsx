import { useState } from "react";

const ChatInterface = () => {
  //message format:
  //{
  //  sender: "buyer" | "seller",
  //  content: string,
  //}
  const [messages, setMessages] = useState([]);
  let inputContent = "";

  function addMessage() {
    inputContent = document.querySelector(".ChatInterface-Input").value;
    console.log(inputContent);
    setMessages([
      ...messages,
      {
        sender: "buyer",
        content: inputContent,
      },
    ]);
    inputContent = "";
  }

  function getResponse(){
    //logic yet to be added
    return;
  }

  return (
    <div className="ChatInterface-Container">
      <div className="ChatInterface-Message-Container">
        {messages.map((message, index) => {
          return (
            <div className="ChatInterface-Message" key={index}>
              <div className="ChatInterface-Message-Content">
                {message.content}
              </div>
            </div>
          );
        })}
      </div>
      <form className="ChatInterface-Input-Container">
        <input className="ChatInterface-Input" type="text" />
        <button
          className="ChatInterface-Button"
          onClick={(e) => {
            e.preventDefault();
            addMessage();
            getResponse();
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
