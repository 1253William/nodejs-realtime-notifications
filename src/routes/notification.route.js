const express = require('express');
const router = express.Router();
const { WebSocket } = require('ws');

router.post('/send-announcement', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send({ error: 'Message required' });
  }

  const wss = req.app.get('wss'); // Access wss from app locals
  if (wss) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'announcement', message }));
      }
    });
    res.send({ success: true, message: 'Announcement sent' });
  } else {
    res.status(500).send({ error: 'WebSocket server not available' });
  }
});

router.post('/approve-deal', (req, res) => {
  const { dealId, userId } = req.body;
  if (!dealId || !userId) {
    return res.status(400).send({ error: 'Deal ID and User ID required' });
  }

  const wss = req.app.get('wss');
  if (wss) {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'dealApproval', dealId, userId }));
      }
    });
    res.send({ success: true, message: 'Deal approval notification sent' });
  } else {
    res.status(500).send({ error: 'WebSocket server not available' });
  }
});

module.exports = router;