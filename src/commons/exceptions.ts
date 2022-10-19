export abstract class ProjectErrorException extends Error {
  constructor(msg: string) {
    super();
    super.message = msg;
  }

  abstract statusCode: number;
}

export class DataNotFoundException extends ProjectErrorException {
  statusCode = 404;
}

export class DataAlreadyExistsException extends ProjectErrorException {
  statusCode = 400;
}

export class IllegalArgumentException extends ProjectErrorException {
  statusCode = 400;
}

export class InternalServerErrorException extends ProjectErrorException {
  statusCode = 500;
}
