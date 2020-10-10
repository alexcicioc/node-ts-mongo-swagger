import Pino from 'pino';
import { loggerConfig } from '../config';

const logger = Pino(loggerConfig);

class Logger {
  private static extractErrorInformation(error: any): object {
    return {
      message: error?.message,
      originalMessage: error?.originalMessage,
      name: error?.name,
      stack: error?.stack,
      description: error?.description,
      code: error?.code,
    };
  }

  public static debug(message: string, params: object = {}): void {
    logger.child({ type: 'debug', ...params }).debug(message);
  }

  public static info(event: string, message: string, params: object = {}): void {
    logger.child({ type: 'info', event, ...params }).info(message);
  }

  public static error(message: string, error?: Error): void {
    logger
      .child({
        type: 'error',
        error: Logger.extractErrorInformation(error),
      })
      .error(message);
  }
}

export default Logger;
