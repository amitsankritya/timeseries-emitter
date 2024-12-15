import * as https from 'https';
import fs from 'fs';
import { WebSocketServer } from "ws";
import dotenv from 'dotenv';

import { loadData } from './src/utils.js';
import { createMessage } from './src/emitter.js';

dotenv.config();

const port = process.config.PORT || 3030;

const sslKeyPath = process.env.SSL_KEY_PATH;
const sslCertPath = process.env.SSL_CERT_PATH;

const server = https.createServer({
    key: fs.readFileSync(sslKeyPath),
    cert: fs.readFileSync(sslCertPath),
});

const data = loadData();

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {

    console.log('Client connected. Emitting message...');

    setInterval(() => {
        const encryptedMessage = createMessage(data);
        ws.send(encryptedMessage); 
        console.log('Message sent: ', encryptedMessage);
    }, 10000);
    
});

server.listen(3030, () => {
    console.log("WSS server started on https://localhost:3030");
})
