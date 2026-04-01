import { PartialType } from '@nestjs/mapped-types';
import { CreateIntervieweDto } from './create-interviewe.dto';

export class UpdateIntervieweDto extends PartialType(CreateIntervieweDto) {}
