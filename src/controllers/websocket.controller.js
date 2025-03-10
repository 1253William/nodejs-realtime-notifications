module.exports = (wss) => {
  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);
      // You could add logic here to handle client messages
    });

    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });
};