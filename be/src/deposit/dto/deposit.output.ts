import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DepositOutput {
  @Field(() => Number)
  count: number;

  @Field(() => Number)
  totalValue: number;
}
