import { Test, TestingModule } from '@nestjs/testing';
import { InterviewesService } from './interviewes.service';

describe('InterviewesService', () => {
  let service: InterviewesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterviewesService],
    }).compile();

    service = module.get<InterviewesService>(InterviewesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
