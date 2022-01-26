import { IsDefined, IsNumberString } from 'class-validator';

export default class SumDTO {
  @IsDefined({ message: 'You must provide the first number in order to sum' })
  @IsNumberString()
  firstNumber: number;

  @IsDefined({ message: 'You must provide the second number in order to sum' })
  @IsNumberString()
  secondNumber: number;
}
