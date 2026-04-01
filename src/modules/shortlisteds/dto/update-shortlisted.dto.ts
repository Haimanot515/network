import { PartialType } from '@nestjs/mapped-types';
import { CreateShortlistedDto } from './create-shortlisted.dto';

export class UpdateShortlistedDto extends PartialType(CreateShortlistedDto) {}
