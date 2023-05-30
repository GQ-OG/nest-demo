import { IsNotEmpty } from 'class-validator';

export class GirlInfoDto {
  @IsNotEmpty({ message: '用户id不能为空' })
  readonly id: string | number;
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly name: string;
}
