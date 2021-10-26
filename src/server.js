import express from 'express';
import route from './routes/brand.routes.js';

const app = express();
app.use(express.json());
app.use(route)
app.listen(3333, () => {`Server is running!`});
