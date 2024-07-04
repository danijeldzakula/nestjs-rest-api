import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateHelloDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
