// only for testing
import WebSocket from "ws";

const socket = new WebSocket('ws://localhost:3000');

socket.on('opne', () => {
    console.log('connected to ws server');
});

socket.on('message', (message) => {
    console.log(`Recieved Message: ${message}`);
});

socket.on('error', (error) => {
    console.log(`Error: ${error}`);
});