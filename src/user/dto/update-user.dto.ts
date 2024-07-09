export class UpdateUserDto {
  readonly email?: string;
  readonly password?: string;
  readonly name?: string;
  readonly phone?: string;
  readonly paymentMethods?: string[];
  readonly orderHistory?: string[];
}
