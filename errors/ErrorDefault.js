class ErrorDefault extends Error {
  constructor(message) {
    super(message);
    this.errorMessage = message;
    this.statusCode = 500;
  }
}

module.exports = ErrorDefault;
