import ICar from '../../Interfaces/ICar';

export default class Car {
  private _model: string;
  private _year: number;
  private _color: string;
  private _status?: boolean;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(car: ICar) {
    this._model = car.model;
    this._year = car.year;
    this._color = car.color;
    this._status = car.status || false;
    this._buyValue = car.buyValue;
    this._doorsQty = car.doorsQty;
    this._seatsQty = car.seatsQty;
  }

  public set model(model: string) {
    this._model = model;
  }

  public get model() {
    return this._model;
  }

  public set year(year: number) {
    this._year = year;
  }

  public get year() {
    return this._year;
  }

  public set color(color: string) {
    this._color = color;
  }

  public get color() {
    return this._color;
  }

  public set status(status: boolean | undefined) {
    this._status = status;
  }

  public get status() {
    return this._status;
  }

  public set buyValue(buyValue: number) {
    this._buyValue = buyValue;
  }

  public get buyValue() {
    return this._buyValue;
  }

  public set doorsQty(doorsQty: number) {
    this._doorsQty = doorsQty;
  }

  public get doorsQty() {
    return this._doorsQty;
  }

  public set seatsQty(seatsQty: number) {
    this._seatsQty = seatsQty;
  }

  public get seatsQty() {
    return this._seatsQty;
  }
}