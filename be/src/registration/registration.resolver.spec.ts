import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationResolver } from './registration.resolver';
import { RegistrationService } from './registration.service';

describe('RegistrationResolver', () => {
  let resolver: RegistrationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationResolver, RegistrationService],
    }).compile();

    resolver = module.get<RegistrationResolver>(RegistrationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
