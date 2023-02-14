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
    const car = await this._model.findById(id);

    if (!car) throw Error('Car not found');

    return { status: 200, data: this.createCarDomain(car) };
  }

  public async update(id: string, updatedCar: ICar) {
    const car = await this._model.update(id, updatedCar);

    if (!car) throw Error('Car not found');

    return { status: 200, data: this.createCarDomain(car) };
  }
}