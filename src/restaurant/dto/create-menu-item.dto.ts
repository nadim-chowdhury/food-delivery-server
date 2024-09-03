export class CreateMenuItemDto {
  readonly _id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly availability: boolean;
  readonly image: string;
}
