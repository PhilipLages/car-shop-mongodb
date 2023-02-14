import { isValidObjectId } from 'mongoose';

import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _model = new CarODM();

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async create(car: ICar) {
    const newCar = await this._model.create(car);
  
    return { status: 201, data: this.createCarDomain(newCar) };
  }

  public async findAll() {
    const cars = await this._model.findAll();
    const data = cars.map((car) => this.createCarDomain(car));

    return { status: 200, data };
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) return { status: 422, data: { message: 'Invalid mongo id' } };

    const car = await this._model.findById(id);

    if (!car) return { status: 404, data: { message: 'Car not found' } };

    return { status: 200, data: this.createCarDomain(car) };
  }

  public async update(id: string, updatedCar: ICar) {
    if (!isValidObjectId(id)) return { status: 422, data: { message: 'Invalid mongo id' } };

    const car = await this._model.update(id, updatedCar);

    if (!car) return { status: 404, data: { message: 'Car not found' } };

    return { status: 200, data: this.createCarDomain(car) };
  }
}