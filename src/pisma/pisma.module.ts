import { Global, Module } from '@nestjs/common';
import { PismaService } from './pisma.service';

@Global()
@Module({
  providers: [PismaService],
  exports: [PismaService],
})
export class PismaModule {}
