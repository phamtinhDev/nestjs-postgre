import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppConfigModule } from './config/app/config.module';
import { PostgreModule } from './providers/database/postgresql/provider.module';
import { UserModule } from './models/user/user.module';
import { AuthModule } from './authentication/auth.module';

@Module({
  imports: [AppConfigModule, PostgreModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
