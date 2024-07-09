import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class OrderGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('updateOrderStatus')
  handleUpdateOrderStatus(
    @MessageBody() data: { orderId: string; status: string },
  ) {
    this.server.emit('orderStatusUpdated', data);
  }

  @SubscribeMessage('updateRiderLocation')
  handleUpdateRiderLocation(
    @MessageBody()
    data: {
      orderId: string;
      location: { lat: number; lng: number };
    },
  ) {
    this.server.emit('riderLocationUpdated', data);
  }
}
