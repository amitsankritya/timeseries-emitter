import crypto from 'crypto';
import fs from 'fs';
import { config } from '../config/config.js';

// read data from json file
export const loadData = () => {
    return JSON.parse(fs.readFileSync(config.dataFile), 'utf-8');
}

// create the secrete key
export const generateSecreteKey = (message) => {
    return crypto.createHash('sha256').update(JSON.stringify(message)).digest('hex');
}

// encrypt the message
export const encryptMessage = (message, passphrase) => {
    const key = crypto
        .createHash('sha512')
        .update(passphrase)
        .digest('hex')
        .substring(0, 32)
    const iv = crypto
        .createHash('sha512')
        .update('secret_iv')
        .digest('hex')
        .substring(0, 16)

    const cypher = crypto.createCipheriv('aes-256-ctr', key, iv);
    let encrypted = cypher.update(JSON.stringify(message), 'utf-8', 'hex');
    encrypted += cypher.final('hex');
    const encryptedMessage = iv.toString('hex') + encrypted;
    return encryptedMessage;
}