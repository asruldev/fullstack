import { Controller } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly http: HttpService) {}

  @RabbitSubscribe({
    exchange: 'order.exchange',
    routingKey: '',
    queue: 'kitchen.process',
  })
  async handleOrder(msg: { id: number }) {
    console.log('🍳 Kitchen received', msg);

    const orderId = msg.id;
    if (orderId) {
      await firstValueFrom(
        this.http.patch(`http://order-service:3000/order/${orderId}/status`, {
          status: 'Processed',
        }),
      );
      console.log(`✅ Order ${orderId} status updated via OrderService API`);
    }
  }
}
