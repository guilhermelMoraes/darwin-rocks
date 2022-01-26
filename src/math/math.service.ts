import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  public sumTwoNumbers(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
  }
}
