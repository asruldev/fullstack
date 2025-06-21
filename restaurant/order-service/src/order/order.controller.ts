import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { Order } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  placeOrder(
    @Body() body: { menuIds: number[]; customerEmail: string },
  ): Promise<Order> {
    return this.orderService.placeOrder(body.menuIds, body.customerEmail);
  }

  @Get(':id')
  getStatus(@Param('id') id: number): Promise<Order> {
    return this.orderService.getStatus(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body() body: { status: string }) {
    return this.orderService.updateStatus(id, body.status);
  }
}
