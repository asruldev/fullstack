import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Menu } from '../menu/menu.entity';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Menu]), SharedModule],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
