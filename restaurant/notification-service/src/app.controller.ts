import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern()
  handleOrderCreated(@Payload() data: { id: number; customerEmail: string }) {
    console.log('Notification received order.created:', data);
    // proses kirim email
    const orderId = data.id;
    if (data && orderId) {
      console.log(`📧 Sending notification for order ${orderId}`);
      // Simulasi pengiriman email
      console.log(`Email sent for order ${orderId} to ${data.customerEmail}`);
    } else {
      console.error('Invalid order data received for notification');
    }
  }
}
