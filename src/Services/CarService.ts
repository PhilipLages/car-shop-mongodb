import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private _model = new CarODM();

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async create(car: ICar): Promise<Car> {
    const newCar = await this._model.create(car);
    console.log(this.createCarDomain(newCar));
    return this.createCarDomain(newCar);
  }
}