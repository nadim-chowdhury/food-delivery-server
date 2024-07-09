import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat, ChatDocument } from './chat.schema';
import { CreateChatDto } from './dto/create-chat.dto';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}

  async create(createChatDto: CreateChatDto): Promise<Chat> {
    const createdChat = new this.chatModel(createChatDto);
    return createdChat.save();
  }

  async findAll(): Promise<Chat[]> {
    return this.chatModel.find().exec();
  }

  async findByUser(userId: string): Promise<Chat[]> {
    return this.chatModel
      .find({ $or: [{ senderId: userId }, { receiverId: userId }] })
      .exec();
  }
}
