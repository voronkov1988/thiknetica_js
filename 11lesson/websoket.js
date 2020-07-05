const username = document.querySelector('.name').value,
    btnClose = document.querySelector('.exit'),
    login = document.querySelector('.login');
let socket = new WebSocket(`ws://localhost:8080/${username}`);

socket.onopen = event => {
    console.log("соединение установлено", event);
};

socket.onmessage = event => {
    data = JSON.parse(event.data);
    console.log("Message received: ", event.data);

    switch (data.command) {
        case "successLogin":
            createChannel(data.channel);
            return;
        case "sendMessage":
            updateChat(data.channel, data.message, data.username);
            return;
        case "notification":
            notificateChat(data.channel, data.message);
            return;
        default:
            return;
    }
};

socket.onclose = event => {
    if (event.wasClean) {
        console.log("закрыто успешно", event.code);
    } else {
        console.log("закрыто с ошибкой", event.code);
    }
};

function createChannel(channelName) {
    const chatsDiv = document.querySelector(".allChats")

    const newChannel = document.createElement("div");
    newChannel.id = channelName
    newChannel.innerHTML = `
     <h3>${channelName}<button id="logout-${channelName}" onclick="exitChannel('${channelName}')">Logout</button></h3>
     <div id="messages"></div>
     <input id="message" type="text" placeholder="message" />
     <button id="send-to-chat-${channelName}" onclick="sendMessage('${channelName}')">Send</button>
     `;
    chatsDiv.append(newChannel)
}

function sendMessage(channelName) {
    const channel = document.getElementById(channelName);
    const message = channel.children.message.value;

    const data = {
        command: 'sendMessage',
        message: message,
        channel: channelName,
        username: username
    };

    socket.send(JSON.stringify(data));
    channel.children.message.value = "";
}

function updateChat(channelName, message, username) {
    const channel = document.getElementById(channelName);

    const messages = channel.children.messages;
    const messageHtml = `<p>${username}: ${message}</p>`;
    messages.innerHTML += messageHtml
}

function notificateChat(channelName, message) {
    const channel = document.getElementById(channelName);

    const messages = channel.children.messages;
    const messageHtml = `<p style="color: #ccc">${message}</p>`;
    messages.innerHTML += messageHtml
}

function exitChannel(channelName) {
    const data = {
        command: 'logout',
        channel: channelName,
        username: username
    };

    socket.send(data);
    const channel = document.getElementById(channelName);
    channel.remove()
}
login.addEventListener('click', ()=>{
    const loginValue = document.querySelector(".login-value");
    const data = {
        command: 'login',
        channel: loginValue.value,
        username: username
    };

    socket.send(data);

    loginValue.value = "";
});
btnClose.addEventListener('click', ()=>{
    socket.close()
});
