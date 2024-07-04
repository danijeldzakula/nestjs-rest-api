import { Injectable } from '@nestjs/common';
import { CreateHelloDto } from './App.dto';

const fakeHellosData = [
  {
    username: 'Danijel',
    email: 'danijel@gmail.com',
  },
  {
    username: 'Dzakula',
    email: 'dzakula@gmail.com',
  },
];

@Injectable()
export class AppService {
  private fakeHellos = [];

  constructor() {
    this.fakeHellos = fakeHellosData;
  }

  getHello(): CreateHelloDto[] {
    return this.fakeHellos;
  }

  createHello(userData: CreateHelloDto): CreateHelloDto {
    return {
      email: userData.email,
      username: userData.username,
    };
  }
}
