import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class MathController {
  private readonly _mathService: MathService;
  constructor(mathService: MathService) {
    this._mathService = mathService;
  }

  @Get('sum')
  sum(
    @Query('firstNumber', ParseIntPipe) firstNumber: number,
    @Query('secondNumber', ParseIntPipe) secondNumber: number,
  ) {
    return this._mathService.sumTwoNumbers(firstNumber, secondNumber);
  }
}
