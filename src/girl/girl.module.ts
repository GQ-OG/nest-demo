import { Global, Module } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';

@Global()
@Module({
  controllers: [GirlController],
  providers: [GirlService],
  exports: [GirlService],
})
export class GirlModule {}
