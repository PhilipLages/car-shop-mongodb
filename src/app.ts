import express from 'express';
import carRoutes from './Routes/Car.routes';

const app = express();

app.use('/cars', carRoutes);

export default app;
