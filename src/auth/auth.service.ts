import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RiderService } from '../rider/rider.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly riderService: RiderService,
    private readonly jwtService: JwtService,
  ) {}

  async validateRider(email: string, pass: string): Promise<any> {
    const rider = await this.riderService.findOneByEmail(email);
    if (rider && (await bcrypt.compare(pass, rider.password))) {
      // const { password, ...result } = rider.toObject();
      // return result;
      return rider;
    }
    return null;
  }

  async loginRider(rider: any) {
    const payload = { email: rider.email, sub: rider._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
