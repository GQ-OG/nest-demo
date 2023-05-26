import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girls')
export class GirlController {
  constructor(private girlService: GirlService) {}
  @Get('getList')
  getGirls(): any {
    return this.girlService.getGirlsList();
  }
  @Post('addGirl')
  addGirl(@Body() body): any {
    return this.girlService.addGirl({ id: Number(body.id), name: body.name });
  }
  //http://localhost:3000/api/girls/1的形式
  @Get(':id')
  getGirlById(@Param() params): any {
    return this.girlService.getDetail(Number(params.id));
  }
  @Get('detail')
  getGirlDetail(@Query() query): any {
    return this.girlService.getDetail(Number(query.id));
  }
  @Get('photo')
  @Redirect(
    'https://www.google.com/search?rlz=1C1GCEU_zh-CN__1047__1047&q=girl&tbm=isch&source=univ',
  )
  getGirlPhoto(): any {
    return {};
  }
}
