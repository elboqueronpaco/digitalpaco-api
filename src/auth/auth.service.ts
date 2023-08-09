import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  async register({ name, username, email, password }: RegisterDto) {
    const userFound = await this.userService.findOneByEmail(email);
    if (userFound) {
      throw new BadRequestException('User already exists');
    }
    const passwordHas = await bcryptjs.hash(password, 10);
    const user = await this.userService.create({
      name,
      username,
      email,
      password: passwordHas,
    });
    console.log(user)
    return {
      message: 'User created successfully',
    };
  }

  async login() {
    return 'register service';
  }
}
