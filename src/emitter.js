import WebSocket from "ws";
import { configDotenv } from "dotenv";

configDotenv.config();

const passPhrase = process.env.PASSPHRASE || 'secret-passphrase'; 