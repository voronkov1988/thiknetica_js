const WebSocket = require("ws");
const wsConnection = new WebSocket.Server({ port: 8080 });

const clients = new Set();
const channels = ['oneChannel', 'twoChannel', 'threeChannel'];

class User {
    constructor(connection, username) {
        this.username = username;
        this.connection = connection;
        this.channels = new Set();
    }

    loginChannel(channelName) {
        if (channels.indexOf(channelName) !== -1) {
            this.channels.add(channelName);

            const data = {
                command: 'login',
                channel: channelName,
            };
            this.connection.send(data);

            const InfoMessageData = {
                command: 'infoMessage',
                channel: channelName,
                message: `${this.username} вы успешно залогинились`
            };
            sendInfoMessage(clients, InfoMessageData)
        }
    }

    logoutChannel(channelName) {
        this.channels.delete(channelName);

        const InfoMessageData = {
            command: 'notification',
            channel: channelName,
            message: `${this.username} вы вышли с канала`
        };
        sendInfoMessage(clients, InfoMessageData)
    }

    checkLogin(channelName) {
        return this.channels.has(channelName)
    }
}

wsConnection.on("connection", function(ws, req) {
    const username = req.url.replace('/', '');
    const user = new User(ws, username);

    clients.add(user);

    const channelsUpdate = {
        command: 'channelsUpdate',
        channels: channels
    };

    user.connection.send(channelsUpdate);

    user.connection.on("message", function(data) {
        const message = JSON.parse(data);

        switch (message.command) {
            case "login":
                user.loginChannel(message.channel);
                return;
            case "logout":
                user.logoutChannel(message.channel);
                return;
            case "sendMessage":
                clients.forEach((client) => {
                    if (client.checkLogin(message.channel)) {
                        client.connection.send(message);
                    }
                });
                return;
            case "exit":
                return;
            default:
                ws.send("неизвестная команда");
                return;
        }
    });

    user.connection.on("close", function() {
        clients.delete(user);
    });
});

function sendInfoMessage(clients, data) {
    clients.forEach((client) => {
        if (client.checkLogin(data.channel)) {
            client.connection.send(data);
        }
    });
}