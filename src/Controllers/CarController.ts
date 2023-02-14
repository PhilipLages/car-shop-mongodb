import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = { ...this.req.body };

    try {
      const { status, data } = await this.service.create(car);
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
    const updatedCar: ICar = { ...this.req.body };

    try {
      const { status, data } = await this.service.update(id, updatedCar);
      return this.res.status(status).json(data);
    } catch (error) {
      this.next(error);
    }
  }
}