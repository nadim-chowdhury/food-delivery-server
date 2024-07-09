export class CreatePromotionDto {
  readonly restaurantId: string;
  readonly title: string;
  readonly description: string;
  readonly discountPercentage: number;
  readonly startDate: Date;
  readonly endDate: Date;
}
