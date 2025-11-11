import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepositOutput } from './dto/deposit.output';
import { DepositService } from './deposit.service';

@Resolver()
export class DepositResolver {
  constructor(private readonly depositService: DepositService) {}

  @Query(() => DepositOutput, { nullable: true })
  findDepositSummary(
    @Args('filterMonth', { type: () => String })
    filterMonth: string,
    @Args('filterYear', { type: () => String})
    filterYear: string,
  ): DepositOutput | null {
    return this.depositService.depositCounter(filterMonth, filterYear);
  }
}
