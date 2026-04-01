import { Test, TestingModule } from '@nestjs/testing';
import { ShortlistedsService } from './shortlisteds.service';

describe('ShortlistedsService', () => {
  let service: ShortlistedsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortlistedsService],
    }).compile();

    service = module.get<ShortlistedsService>(ShortlistedsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
