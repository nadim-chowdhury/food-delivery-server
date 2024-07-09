import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@Controller('chats')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  async create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  async findAll() {
    return this.chatService.findAll();
  }

  @Get('user/:id')
  async findByUser(@Param('id') userId: string) {
    return this.chatService.findByUser(userId);
  }
}
