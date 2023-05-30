import {
  Body,
  Controller,
  Get,
  HttpCode,
  Ip,
  Param,
  Post,
  Query,
  Redirect,
  UsePipes,
} from '@nestjs/common';
import { GirlService } from './girl.service';
import { ValidationPipe } from 'src/pipe/validation/validation.pipe';
import { GirlInfoDto } from 'src/config/girl.dto';

@Controller('girls')
export class GirlController {
  constructor(private girlService: GirlService) {}

  @Get('photo')
  @Redirect(
    'https://www.google.com/search?rlz=1C1GCEU_zh-CN__1047__1047&q=girl&tbm=isch&source=univ',
  )
  getGirlPhoto(): any {
    return 'https://www.google.com/search?rlz=1C1GCEU_zh-CN__1047__1047&q=girl&tbm=isch&source=univ';
  }

  @Get('getList')
  getGirls(): any {
    return this.girlService.getGirlsList();
  }

  @Post('addGirl')
  @UsePipes(new ValidationPipe())
  addGirl(@Body() body: GirlInfoDto): any {
    return this.girlService.addGirl({ id: Number(body.id), name: body.name });
  }

  @Post('addGirlError')
  addGirlError(@Body() body): any {
    return this.girlService.addGirlError({
      id: Number(body.id),
      name: body?.name,
    });
  }

  @Get('detail')
  getGirlDetail(@Query() query): any {
    return this.girlService.getDetail(Number(query.id));
  }

  //http://localhost:3000/api/girls/1的形式
  @Get(':id')
  getGirlById(@Param() params): any {
    return this.girlService.getDetail(Number(params.id));
  }
}
