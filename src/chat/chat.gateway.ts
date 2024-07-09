import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendMessage')
  handleMessage(
    client: Socket,
    payload: { sender: string; recipient: string; message: string },
  ): void {
    this.server.to(payload.recipient).emit('receiveMessage', payload);
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}

import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer() server;

  private logger: Logger = new Logger('ChatGateway');

  @SubscribeMessage('messageToServer')
  handleMessage(@MessageBody() data: any): string {
    this.logger.log(data);
    return 'Message received and sent to clients!';
  }
}
