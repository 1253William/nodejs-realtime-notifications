const socket = new WebSocket('ws://localhost:8000'); 

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  const notificationsList = document.getElementById('notifications');
  const listItem = document.createElement('li');

  if (data.type === 'announcement') {
    listItem.textContent = `Announcement: ${data.message}`;
  } else if (data.type === 'dealApproval') {
    listItem.textContent = `Deal ${data.dealId} approved for user ${data.userId}`;
  }

  notificationsList.appendChild(listItem);
};

socket.onopen = () => {
  console.log('WebSocket connection opened');
};

socket.onclose = () => {
  console.log('WebSocket connection closed');
};