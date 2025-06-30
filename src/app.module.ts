import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenAiModule } from './open-ai/open-ai.module';
import { EnvConfig } from './config/env';

@Module({
  imports: [OpenAiModule,
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
