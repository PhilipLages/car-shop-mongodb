import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private _model = new MotorcycleODM();

  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this._model.create(motorcycle);

    return { status: 201, data: this.createMotorcycleDomain(newMotorcycle) };
  }

  public async findAll() {
    const motorcycles = await this._model.findAll();
    const data = motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));

    return { status: 200, data };
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) return { status: 422, data: { message: 'Invalid mongo id' } };

    const car = await this._model.findById(id);

    if (!car) return { status: 404, data: { message: 'Motorcycle not found' } };

    return { status: 200, data: this.createMotorcycleDomain(car) };
  }

  public async update(id: string, updatedCar: IMotorcycle) {
    if (!isValidObjectId(id)) return { status: 422, data: { message: 'Invalid mongo id' } };

    const car = await this._model.update(id, updatedCar);

    if (!car) return { status: 404, data: { message: 'Motorcycle not found' } };

    return { status: 200, data: this.createMotorcycleDomain(car) };
  }
}