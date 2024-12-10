import { generateSecreteKey, encryptMessage } from "./utils.js";
import { config } from "../config/config.js";

// generate message by randomizing data
const randomizedData = (data) => {
    //console.log(data.names[0]);
    console.log(Math.floor(Math.random() * data.names.length), data.names.length);
    // const name = data.names[0];
    // const origin = data.cities[0];
    // const destination = data.cities[0];

    const name = data.names[Math.floor(Math.random() * data.names.length)];
    const origin = data.cities[Math.floor(Math.random() * data.cities.length)];
    const destination = data.cities[Math.floor(Math.random() * data.cities.length)];

    return { name, origin, destination };
}

// create the message with randomized data and add secret key
export const createMessage = (data) => {
    // TODO: generate number messages b/w 49-499
    const message = randomizedData(data);
    message.secret_key = generateSecreteKey(message);
    console.log(message.secret_key);
    return encryptMessage(message, config.passphrase);
}

