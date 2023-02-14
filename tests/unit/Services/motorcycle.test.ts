import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { motorcycleOutput, newMotorcycleInput } from './mocks/motorcycleMocks';
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
});