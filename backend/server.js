const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected to WebSocket');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`this is an LLM respose`);
  });
});

