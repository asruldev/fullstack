import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Menu } from '../menu/menu.entity';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot({
      uri: 'amqp://guest:guest@rabbitmq:5672',
      exchanges: [
        {
          name: 'order.exchange',
          type: 'fanout',
        },
      ],
    }),
    TypeOrmModule.forFeature([Order, Menu]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
