import { ClientsModule, Transport } from '@nestjs/microservices';

export const RabbitMQClient = ClientsModule.register([
  {
    name: 'ORDER_PUBLISHER',
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@rabbitmq:5672'],
      exchange: 'orders',
      exchangeType: 'fanout',
    },
  },
]);
