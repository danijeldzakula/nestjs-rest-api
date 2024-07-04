import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateHelloDto } from './App.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hello')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): CreateHelloDto[] {
    return this.appService.getHello();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createHello(@Body() userData: CreateHelloDto): CreateHelloDto {
    return this.appService.createHello(userData);
  }
}
