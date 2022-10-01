class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.errorMessage = message;
    this.statusCode = 400;
  }
}

module.exports = ValidationError;
