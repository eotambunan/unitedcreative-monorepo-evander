import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Deposit {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
