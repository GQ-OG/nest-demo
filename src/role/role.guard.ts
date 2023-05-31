import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private Reflect: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const admin = this.Reflect.get('role', context.getHandler());
    const req: any = context.switchToHttp().getRequest();
    if (admin?.includes(req.query.role)) {
      return true;
    } else {
      throw new UnauthorizedException('error: 角色权限不足');
    }
  }
}
