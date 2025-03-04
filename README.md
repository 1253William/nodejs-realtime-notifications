# nodejs-realtime-notifications
A basic server using Node.js, Express, and the ws WebSocket library.
Clients can connect to the server via WebSockets to receive real-time notifications. Notifications can be triggered by sending HTTP POST requests to the server, making it easy to test using Postman.

Features:
-Real-time communication between server and clients using WebSockets.
-Ability to broadcast notifications to all connected clients.
-Simple HTTP endpoint to trigger notifications.