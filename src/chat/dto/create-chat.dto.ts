export class CreateChatDto {
  readonly senderId: string;
  readonly receiverId: string;
  readonly message: string;
}
