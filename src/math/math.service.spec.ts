import { Test, TestingModule } from '@nestjs/testing';
import { MathService } from './math.service';

describe('MathService | Sum', () => {
  let sut: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MathService],
    }).compile();

    sut = module.get<MathService>(MathService);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('2 + 2 = 4', () => {
    const sum = sut.sumTwoNumbers(2, 2);
    expect(sum).toBe(4);
  });

  it('5 + 5 = 10', () => {
    const sum = sut.sumTwoNumbers(5, 5);
    expect(sum).toBe(10);
  });
});
