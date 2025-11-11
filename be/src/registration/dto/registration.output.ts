import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RegistrationOutput {
  @Field(() => Number)
  count: number;

  @Field(() => Number)
  totalValue: number;
}
