import express from 'express';
import cors from 'cors';
import {connectDB} from './config/db.js';
import userRoutes from './routers/router.js';

const app = express()

app.use(cors());
app.use(express.json());

app.use('/api/users',userRoutes)

app.listen(3000, () => {
    connectDB();
    console.log('server berjaan di server dengan port: 3000')
})