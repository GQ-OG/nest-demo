import { Get, Injectable, Redirect } from '@nestjs/common';

@Injectable()
export class GirlService {
  getGirlsList() {
    return {
      code: 0,
      msg: 'success',
      data: ['小红', '小兰'],
    };
  }
  addGirl({ id, name }: { id: number; name: string }) {
    console.log(id, '----------------', name);
    return {
      code: 0,
      msg: '添加成功',
      data: { id, name },
    };
  }
  getDetail(id: number) {
    if (id === 1) {
      return {
        code: 0,
        msg: 'success',
        data: '小芳',
      };
    } else if (id === 2) {
      return {
        code: 0,
        msg: 'success',
        data: '小红',
      };
    } else {
      return {
        code: 200,
        msg: 'not get',
        data: null,
      };
    }
  }
}
