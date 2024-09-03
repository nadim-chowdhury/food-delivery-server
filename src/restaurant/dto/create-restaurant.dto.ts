export class CreateRestaurantDto {
  readonly name: string;
  readonly cuisine: string;
  readonly rating?: number;
  readonly distance?: number;
  readonly priceRange?: string;
  readonly menu?: string[];
  readonly details?: string;
  readonly password: string;
}

// export class CreateRestaurantDto {
//   readonly name: string;
//   readonly address: string;
//   readonly contact: string;
//   readonly email: string;
//   readonly password: string;
// }
