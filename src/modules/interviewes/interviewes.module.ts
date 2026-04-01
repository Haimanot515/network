import { Module } from '@nestjs/common';
import { InterviewesService } from './interviewes.service';
import { InterviewesController } from './interviewes.controller';

@Module({
  controllers: [InterviewesController],
  providers: [InterviewesService],
})
export class InterviewesModule {}
