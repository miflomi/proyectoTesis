import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerAPI from './routes/index.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;

mongoose.connect(URI_DB);
const db = mongoose.connection;

db.on('error', () => { console.error('Error de conexión')});
db.once('open', () => { console.log('Conexión con la DB Correcta, ok')});

const app = express();
app.use(cors () );
app.use( express.json() );

app.use('/', express.static('public'));



app.use(  (request, response, next) => {
    console.log('Hola soy el middleware 👋 ');
    next();
});

app.get('/', (request, response) => {
    response.send('<h1> API Club </h1>');
});

routerAPI(app);
app.listen(PORT, () => {
    console.log(`API Club en el puerto ${PORT}`);
} )