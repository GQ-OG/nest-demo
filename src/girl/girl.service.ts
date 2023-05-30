import { Get, Injectable, Redirect } from '@nestjs/common';

@Injectable()
export class GirlService {
  private list = ['小红', '小兰'];
  getGirlsList() {
    return {
      code: 0,
      msg: 'success',
      data: this.list?.filter((item) => !!item),
    };
  }
  addGirl({ id, name }: { id: number; name: string }) {
    this.list.push(name);
    return {
      code: 0,
      msg: '添加成功',
      data: { id, name },
    };
  }
  addGirlError({ id, name }: { id: number; name: Array<string> }) {
    this.list.push(name[0]);
    name.push('push');
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
