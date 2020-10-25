import express from 'express';
const app = express();
import indexRoutes from './routes/index';

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Routes
app.use(indexRoutes);
const PORT = 8080;
app.listen(PORT);
console.log(`Example app listening at http://localhost:${PORT}`);