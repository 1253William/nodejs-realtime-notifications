import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const server = createServer(app);
const port = process.env.PORT || 3000;

// Initialize WebSocket Manager
const webSocketManager = new WebSocketManager(server);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', notificationRoutes(webSocketManager));

// Start Server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
