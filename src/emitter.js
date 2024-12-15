import { generateSecreteKey, encryptMessage } from "./utils.js";
import { config } from "../config/config.js";

// generate message by randomizing data
const randomizedData = (data) => {
    console.log(Math.floor(Math.random() * data.names.length), data.names.length);

    const name = data.names[Math.floor(Math.random() * data.names.length)];
    const origin = data.cities[Math.floor(Math.random() * data.cities.length)];
    const destination = data.cities[Math.floor(Math.random() * data.cities.length)];

    return { name, origin, destination };
}

// create the message with randomized data and add secret key
export const createMessage = (data) => {
    
    const numMessages = Math.floor(Math.random() * (499 - 49 + 1)) + 49;

    const encryptedMessages = [];

    for (let i = 0; i < numMessages; i++) {

        const message = randomizedData(data);
        console.log(message);
        message.secret_key = generateSecreteKey(message);
        
        const encryptedMessage = encryptMessage(message, config.passphrase);
        encryptedMessages.push(encryptedMessage);
    }

    const encryptedMessageStream = encryptedMessages.join('|');

    return encryptedMessageStream;
}

