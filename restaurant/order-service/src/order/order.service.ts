import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Menu } from '../menu/menu.entity';
import { In, Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>,
    @Inject('ORDER_PUBLISHER')
    private client: ClientProxy,
  ) {
    void this.client.connect();
  }

  async placeOrder(menuIds: number[], customerEmail: string): Promise<Order> {
    const menus = await this.menuRepository.find({
      where: { id: In(menuIds) },
    });
    if (!menus.length) {
      throw new NotFoundException('No menu items found for given IDs');
    }

    const order = this.orderRepository.create({
      menus,
      customerEmail,
      status: 'Pending',
    });
    const savedOrder = await this.orderRepository.save(order);

    // Pakai emit untuk broadcast
    this.client.emit('order.created', savedOrder);
    console.log('📦 Order created:', savedOrder);

    return savedOrder;
  }

  async getStatus(orderId: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id: orderId },
      relations: ['menus'],
    });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  async updateStatus(orderId: number, status: string) {
    const order = await this.orderRepository.findOneBy({ id: orderId });
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    order.status = status;
    return this.orderRepository.save(order);
  }
}
