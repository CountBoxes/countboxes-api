class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class ErrorBadRequest extends CustomError {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

export class ErrorUnauthorized extends CustomError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}
