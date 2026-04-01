import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InterviewesService } from './interviewes.service';
import { CreateIntervieweDto } from './dto/create-interviewe.dto';
import { UpdateIntervieweDto } from './dto/update-interviewe.dto';

@Controller('interviewes')
export class InterviewesController {
  constructor(private readonly interviewesService: InterviewesService) {}

  @Post()
  create(@Body() createIntervieweDto: CreateIntervieweDto) {
    return this.interviewesService.create(createIntervieweDto);
  }

  @Get()
  findAll() {
    return this.interviewesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interviewesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntervieweDto: UpdateIntervieweDto) {
    return this.interviewesService.update(+id, updateIntervieweDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interviewesService.remove(+id);
  }
}
