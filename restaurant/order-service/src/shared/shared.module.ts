import { Module } from '@nestjs/common';
import { RabbitMQClient } from './rabbitmq-client.provider';

@Module({
  imports: [RabbitMQClient],
  exports: [RabbitMQClient],
})
export class SharedModule {}
