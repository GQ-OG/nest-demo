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
  SetMetadata,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { GirlService } from './girl.service';
import { ValidationPipe } from 'src/pipe/validation/validation.pipe';
import { GirlInfoDto } from 'src/config/girl.dto';
import { RoleGuard } from 'src/role/role.guard';

@Controller('girls')
// @UseGuards(RoleGuard)
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
  // @SetMetadata('role', ['admin'])
  // 使用SetMetadata为此方法添加元信息，在守卫中可以获取此信息进行业务判断
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
