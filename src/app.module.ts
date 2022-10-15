import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { UsecasesProxyModule } from './src/infrastructure/usecases-proxy/usecases-proxy.module';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { UsecasesProxyModule } from './src/infrastructure/usecases-proxy/usecases-proxy.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    LoggerModule,
    ExceptionsModule,
    RepositoriesModule,
    UsecasesProxyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
