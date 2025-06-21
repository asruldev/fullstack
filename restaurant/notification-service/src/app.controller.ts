import { Controller } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  @RabbitSubscribe({
    exchange: 'order.exchange',
    routingKey: '',
    queue: 'notification.process',
  })
  handleOrderCreated(data: { id: number; customerEmail: string }) {
    console.log('📢 [Notification] Received order.created:', data);

    const orderId = data.id;
    if (data && orderId) {
      console.log(`📧 Sending notification for order ${orderId}`);
      // Simulasi kirim email
      console.log(
        `✅ Email sent for order ${orderId} to ${data.customerEmail}`,
      );
    } else {
      console.error('❌ Invalid order data received for notification');
    }
  }
}
