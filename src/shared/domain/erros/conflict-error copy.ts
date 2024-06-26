export class ConflcitError extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'ConflcitError';
  }
}
