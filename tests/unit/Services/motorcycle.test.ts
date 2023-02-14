import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { 
  motorcycleOutput, 
  newMotorcycleInput, 
  updatedMotorcycleInput, 
} from './mocks/motorcycleMocks';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Tests for motorcycles services layer', function () {
  beforeEach(function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);
  });

  afterEach(sinon.restore);

  it('should create a new motorcycle', async function () {
    const service = new MotorcycleService();
    const result = await service.create(newMotorcycleInput);

    expect(result).to.be.deep.equal({ status: 201, data: motorcycleOutput });
  });

  it('should fild all motorcycles', async function () {
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal({ status: 200, data: [motorcycleOutput] });
  });

  it('should find a motorcycle by its id', async function () {
    const id = '63eada4a3dc927aef16a62f2';

    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.findById(id);

    expect(result).to.be.deep.equal({ status: 200, data: motorcycleOutput });
  });

  it('should return a message if no motorcycle is found', async function () {
    const id = '63eaba30606194e5da44c9b2';

    sinon.stub(Model, 'findById').resolves(null);

    try {
      const service = new MotorcycleService();
      await service.findById(id);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });
  
  it('should return a message if no motorcycle is found while updating', async function () {
    const id = '63eaba30606194e5da44c9b2';

    sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    try {
      const service = new MotorcycleService();
      await service.update(id, updatedMotorcycleInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });
});