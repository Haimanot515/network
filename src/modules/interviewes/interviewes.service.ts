import { Injectable } from '@nestjs/common';
import { CreateIntervieweDto } from './dto/create-interviewe.dto';
import { UpdateIntervieweDto } from './dto/update-interviewe.dto';

@Injectable()
export class InterviewesService {
  create(createIntervieweDto: CreateIntervieweDto) {
    return 'This action adds a new interviewe';
  }

  findAll() {
    return `This action returns all interviewes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interviewe`;
  }

  update(id: number, updateIntervieweDto: UpdateIntervieweDto) {
    return `This action updates a #${id} interviewe`;
  }

  remove(id: number) {
    return `This action removes a #${id} interviewe`;
  }
}
