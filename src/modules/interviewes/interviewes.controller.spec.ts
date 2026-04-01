import { Test, TestingModule } from '@nestjs/testing';
import { InterviewesController } from './interviewes.controller';
import { InterviewesService } from './interviewes.service';

describe('InterviewesController', () => {
  let controller: InterviewesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterviewesController],
      providers: [InterviewesService],
    }).compile();

    controller = module.get<InterviewesController>(InterviewesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
