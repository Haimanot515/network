import { Module } from '@nestjs/common';
import { ShortlistedsService } from './shortlisteds.service';
import { ShortlistedsController } from './shortlisteds.controller';

@Module({
  controllers: [ShortlistedsController],
  providers: [ShortlistedsService],
})
export class ShortlistedsModule {}
