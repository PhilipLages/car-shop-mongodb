import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { newCarInput, carOutput } from './mocks/carMocks';

describe('Tests for car services layer', function () {
  beforeEach(function () {
    sinon.stub(Model, 'create').resolves(carOutput);
  });

  afterEach(sinon.restore);

  it('should create a new car', async function () {
    const service = new CarService();
    const result = await service.create(newCarInput);

    expect(result).to.be.deep.equal({ status: 201, data: carOutput });
  });

  it('should find all cars', async function () {
    sinon.stub(Model, 'find').resolves([carOutput]);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal({ status: 200, data: [carOutput] });
  });

  it('should find a car by its id', async function () {
    const id = '6348513f34c397abcad040b2';

    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.findById(id);

    expect(result).to.be.deep.equal({ status: 200, data: carOutput });
  });

  it('should return a message if no car is found', async function () {
    const id = '63eaba30606194e5da44c9b2';

    sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.findById(id);

    expect(result).to.be.deep.equal({ status: 404, data: { message: 'Car not found' } });
  });
  
  it('should return a message if the id is invalid', async function () {
    const id = 'jooiais';

    sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.findById(id);

    expect(result).to.be.deep.equal({ status: 422, data: { message: 'Invalid mongo id' } });
  });
});