import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RegistrationService } from './registration.service';
import { Registration } from './entities/registration.entity';
import { RegistrationOutput } from './dto/registration.output';

@Resolver()
export class RegistrationResolver {
  constructor(private readonly registrationService: RegistrationService) {}

  @Query(() => RegistrationOutput, { nullable: true })
  findRegistrationSummary(
    @Args('filterMonth', { type: () => String }) filterMonth: string,
    @Args('filterYear', { type: () => String}) filterYear: string
  ): RegistrationOutput | null {
    return this.registrationService.registrationCounter(filterMonth,filterYear);
  }
}
