// 예외를 발견하여 에러로 나타내는 처리 담당 미들웨어는 공통으로 한다.
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IError } from 'src/domain/common/filter/error.interface';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { loggerContext, loggerMessage } from '../returnMessages';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  // LoggerService를 리턴.
  constructor(private readonly logger: LoggerService) {}

  private logMessage(
    request: any,
    message: IError,
    status: number,
    exception: any,
  ) {
    if (status === 500) {
      this.logger.error(
        loggerContext(request),
        loggerMessage(request, message, status),
        status >= 500 ? exception.stack : '',
      );
    } else {
      this.logger.warn(
        loggerContext(request),
        loggerMessage(request, message, status),
      );
    }
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request: any = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? (exception.getResponse() as IError)
        : { message: (exception as Error).message, code_error: null };

    const responseData = {
      ...{
        statusCode: status,
        timestamp: new Date().toLocaleDateString(),
        path: request.url,
      },
    };

    this.logMessage(request, message, status, exception);
    response.status(status).json(responseData);
  }
}
