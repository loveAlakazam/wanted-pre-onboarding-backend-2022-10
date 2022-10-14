import { IError } from 'src/domain/common/filter/error.interface';

const loggerContext = (request: any) => {
  return `End Request for ${request.path}`;
};

const loggerMessage = (request: any, message: IError, status: number) => {
  return `method=${request.method}
  status=${status}
  code_error=${message.code_error ? message.code_error : null}
  message=${message.message ? message.message : null}
  `;
};

export { loggerContext, loggerMessage };
