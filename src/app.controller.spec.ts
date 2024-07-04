import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return "Users Lists!"', () => {
      jest
        .spyOn(appService, 'getHello')
        .mockImplementation(() => fakeHellosData);

      expect(appController.getHello()).toEqual(fakeHellosData);
    });
  });

  describe('createHello', () => {
    it('should create and return user data', () => {
      const userData: CreateHelloDto = {
        email: 'test@example.com',
        username: 'testuser',
      };

      const result = {
        email: 'value1@example.com',
        username: 'testuser',
      };

      jest.spyOn(appService, 'createHello').mockImplementation(() => result);

      expect(appController.createHello(userData)).toEqual(result);
    });
  });
});
