import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  public static sumTwoNumbers(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
  }
}
