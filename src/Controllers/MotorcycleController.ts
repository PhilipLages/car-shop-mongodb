import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }
  
  public async create() {
    const motorcycle: IMotorcycle = { ...this.req.body };

    try {
      const { status, data } = await this.service.create(motorcycle);
      return this.res.status(status).json(data);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const { status, data } = await this.service.findAll();
      return this.res.status(status).json(data);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;

    try {
      const { status, data } = await this.service.findById(id);
      return this.res.status(status).json(data);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const updatedCar: IMotorcycle = { ...this.req.body };

    try {
      const { status, data } = await this.service.update(id, updatedCar);
      return this.res.status(status).json(data);
    } catch (error) {
      this.next(error);
    }
  }
}