import express from 'express';
import ErrorHandler from './Middlewares/Errorhandler';
import carRoutes from './Routes/Car.routes';

const app = express();

app.use('/cars', carRoutes);
app.use(ErrorHandler.handle);

export default app;
