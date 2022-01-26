import { Controller, Get } from '@nestjs/common';

@Controller()
export class MathController {
  @Get('sum')
  sum(): number {
    return 5;
  }
}
