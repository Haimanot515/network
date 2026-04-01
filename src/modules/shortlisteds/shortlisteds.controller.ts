import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortlistedsService } from './shortlisteds.service';
import { CreateShortlistedDto } from './dto/create-shortlisted.dto';
import { UpdateShortlistedDto } from './dto/update-shortlisted.dto';

@Controller('shortlisteds')
export class ShortlistedsController {
  constructor(private readonly shortlistedsService: ShortlistedsService) {}

  @Post()
  create(@Body() createShortlistedDto: CreateShortlistedDto) {
    return this.shortlistedsService.create(createShortlistedDto);
  }

  @Get()
  findAll() {
    return this.shortlistedsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortlistedsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortlistedDto: UpdateShortlistedDto) {
    return this.shortlistedsService.update(+id, updateShortlistedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortlistedsService.remove(+id);
  }
}
