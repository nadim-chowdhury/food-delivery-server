export class CreateRatingDto {
  readonly userId: string;
  readonly restaurantId: string;
  readonly rating: number;
  readonly review?: string;
}
