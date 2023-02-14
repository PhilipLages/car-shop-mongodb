import express from 'express';
import ErrorHandler from './Middlewares/Errorhandler';
import carRoutes from './Routes/Car.routes';
import motorcycleRoutes from './Routes/Motorcycle.routes';

const app = express();

app.use(express.json());
app.use('/cars', carRoutes);
app.use('/motorcycles', motorcycleRoutes);
app.use(ErrorHandler.handle);

export default app;
