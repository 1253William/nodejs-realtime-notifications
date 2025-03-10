const express = require('express');
const http = require('http');
const { WebSocketServer } = require('ws');
const dotenv = require('dotenv');
const notificationRoutes = require('./routes/notification.route');
const setupWebSocket = require('./controllers/websocket.controller');

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
app.set('wss', wss);
setupWebSocket(wss); 

app.use(express.json());
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});