import dotenv from 'dotenv';

dotenv.config();

export const config = {
    passphrase: process.env.PASSPHRASE || 'passphrase',
    dataFile: './data/data.json'
}