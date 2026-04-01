import { Injectable } from '@nestjs/common';
import { CreateShortlistedDto } from './dto/create-shortlisted.dto';
import { UpdateShortlistedDto } from './dto/update-shortlisted.dto';

@Injectable()
export class ShortlistedsService {
  create(createShortlistedDto: CreateShortlistedDto) {
    return 'This action adds a new shortlisted';
  }

  findAll() {
    return `This action returns all shortlisteds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortlisted`;
  }

  update(id: number, updateShortlistedDto: UpdateShortlistedDto) {
    return `This action updates a #${id} shortlisted`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortlisted`;
  }
}
