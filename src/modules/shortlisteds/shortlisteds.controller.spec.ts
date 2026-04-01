import { Test, TestingModule } from '@nestjs/testing';
import { ShortlistedsController } from './shortlisteds.controller';
import { ShortlistedsService } from './shortlisteds.service';

describe('ShortlistedsController', () => {
  let controller: ShortlistedsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortlistedsController],
      providers: [ShortlistedsService],
    }).compile();

    controller = module.get<ShortlistedsController>(ShortlistedsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
