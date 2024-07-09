export class CreateOrderDto {
  readonly userId: string;
  readonly restaurantId: string;
  readonly items: { itemId: string; quantity: number }[];
  readonly totalPrice: number;
  readonly promoCode?: string;
  readonly deliveryType: string;
  readonly scheduleTime?: Date;
}

export class CreateOrderDto {
  readonly customerId: string;
  readonly restaurantId: string;
  readonly items: { itemId: string; quantity: number; price: number }[];
  readonly totalAmount: number;
}
