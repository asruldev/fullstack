import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@rabbitmq:5672'],
      queue: 'order.process',
      queueOptions: { durable: false },
      exchange: 'orders',
      exchangeType: 'fanout',
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
  console.log('✅ Kitchen Service is listening...');
}

bootstrap();
