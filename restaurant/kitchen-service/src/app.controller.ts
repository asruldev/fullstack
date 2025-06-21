import { HttpService } from '@nestjs/axios';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly http: HttpService) {}

  @EventPattern()
  async handleOrderCreated(@Payload() data: { id: number }) {
    console.log('🍳 Kitchen received', data);

    const orderId = data.id;
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
