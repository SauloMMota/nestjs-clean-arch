import { FieldsErrors } from '../validators/validator-fields.interface';

export class ValidationError extends Error {}

export class EnitityValidationError extends Error {
  constructor(public error: FieldsErrors) {
    super('Entity Validation Error');
    this.name = 'EnitityValidationError';
  }
}
