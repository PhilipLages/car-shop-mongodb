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
}