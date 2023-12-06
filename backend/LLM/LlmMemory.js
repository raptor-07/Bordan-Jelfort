require("dotenv").config();
const key = process.env.OPEN_AI_KEY;
// console.log("API KEY:\n", key);
const { ChatMessageHistory } = require("langchain/memory");


//contextual memory management for LLM
let memory;
function createMemory(){
  memory = new ChatMessageHistory();
  console.log("Memory created");
};
function addToMemory(message){
    if (message.isUser) memory.addUserMessage(message.data);
    else memory.addAIChatMessage(message.data);
    //Message object format:
    //message{
    //     isUser: true,
    //     data: "Hello, how are you?"
    //}
};
function getMemory(){
  return memory;
};

exports.createMemory = createMemory;
exports.addToMemory = addToMemory;
exports.getMemory = getMemory;