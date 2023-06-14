import express from "express";
import cors from 'cors'
import {PORT} from './src/config/config.js'
import {routes} from './src/routes/routes.js';
import firebase from 'firebase/compat/app';
import {firebaseConfig} from './src/databases/firebaseConfig.js';
import 'firebase/compat/firestore';


firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const app = express();
app.use(cors())

app.use(express.json())

routes(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})


console.log('Server Initialized Successfully');