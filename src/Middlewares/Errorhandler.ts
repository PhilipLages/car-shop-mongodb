import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error.message.includes('mongo id')) {
      res.status(422).json({ message: error.message });
    }

    if (error.message.includes('not found')) {
      res.status(404).json({ message: error.message });
    }
    
    res.status(500).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;