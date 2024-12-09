import { WebSocketServer } from "ws";
import { configDotenv } from "dotenv";

const port = process.env.PORT || 3000;

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {

    console.log('Client connected. Emitting message...');

    const encryptedMessage = "asjdgjhgjhdgsjhdfhgdsfghfghds"; // encrypted message

    setInterval(() => {
        ws.send(encryptedMessage); 
        console.log('Message sent: ', encryptedMessage);
    }, 2000);
    
});
