import { Test, TestingModule } from '@nestjs/testing';
import { DepositResolver } from './deposit.resolver';
import { DepositService } from './deposit.service';

describe('DepositResolver', () => {
  let resolver: DepositResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepositResolver, DepositService],
    }).compile();

    resolver = module.get<DepositResolver>(DepositResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
