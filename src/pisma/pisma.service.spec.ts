import { Test, TestingModule } from '@nestjs/testing';
import { PismaService } from './pisma.service';

describe('PismaService', () => {
  let service: PismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PismaService],
    }).compile();

    service = module.get<PismaService>(PismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
