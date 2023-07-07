
import express from "express";
import cors from 'cors';
import { PORT } from './src/config/config.js';
import { routes } from './src/routes/routes.js';
import firebase from 'firebase/compat/app';
import { firebaseConfig } from './src/databases/firebaseConfig.js';
import 'firebase/compat/firestore';
import { getWeight } from "./src/coms/coms.js";
import { Server } from "socket.io";
import http from 'http';

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: '*', credentials: false },
});

io.on('connection', async (socket) => {
    socket.on('Weight_Socket', () => {
        console.log('entra');
        getWeight(3, socket);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

routes(app);

console.log('Server Initialized Successfully');