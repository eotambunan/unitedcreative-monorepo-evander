import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DepositOutput = {
  __typename?: 'DepositOutput';
  count: Scalars['Float']['output'];
  totalValue: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  findDepositSummary?: Maybe<DepositOutput>;
  findRegistrationSummary?: Maybe<RegistrationOutput>;
};


export type QueryFindDepositSummaryArgs = {
  filterMonth: Scalars['String']['input'];
  filterYear: Scalars['String']['input'];
};


export type QueryFindRegistrationSummaryArgs = {
  filterMonth: Scalars['String']['input'];
  filterYear: Scalars['String']['input'];
};

export type RegistrationOutput = {
  __typename?: 'RegistrationOutput';
  count: Scalars['Float']['output'];
  totalValue: Scalars['Float']['output'];
};

export type GetBeMasterDataQueryVariables = Exact<{
  filterYear: Scalars['String']['input'];
  filterMonth: Scalars['String']['input'];
}>;


export type GetBeMasterDataQuery = { __typename?: 'Query', findRegistrationSummary?: { __typename?: 'RegistrationOutput', count: number, totalValue: number } | null, findDepositSummary?: { __typename?: 'DepositOutput', count: number, totalValue: number } | null };


export const GetBeMasterDataDocument = gql`
    query getBeMasterData($filterYear: String!, $filterMonth: String!) {
  findRegistrationSummary(filterYear: $filterYear, filterMonth: $filterMonth) {
    count
    totalValue
  }
  findDepositSummary(filterYear: $filterYear, filterMonth: $filterMonth) {
    count
    totalValue
  }
}
    `;

/**
 * __useGetBeMasterDataQuery__
 *
 * To run a query within a React component, call `useGetBeMasterDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBeMasterDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBeMasterDataQuery({
 *   variables: {
 *      filterYear: // value for 'filterYear'
 *      filterMonth: // value for 'filterMonth'
 *   },
 * });
 */
export function useGetBeMasterDataQuery(baseOptions: Apollo.QueryHookOptions<GetBeMasterDataQuery, GetBeMasterDataQueryVariables> & ({ variables: GetBeMasterDataQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBeMasterDataQuery, GetBeMasterDataQueryVariables>(GetBeMasterDataDocument, options);
      }
export function useGetBeMasterDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBeMasterDataQuery, GetBeMasterDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBeMasterDataQuery, GetBeMasterDataQueryVariables>(GetBeMasterDataDocument, options);
        }
export function useGetBeMasterDataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBeMasterDataQuery, GetBeMasterDataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBeMasterDataQuery, GetBeMasterDataQueryVariables>(GetBeMasterDataDocument, options);
        }
export type GetBeMasterDataQueryHookResult = ReturnType<typeof useGetBeMasterDataQuery>;
export type GetBeMasterDataLazyQueryHookResult = ReturnType<typeof useGetBeMasterDataLazyQuery>;
export type GetBeMasterDataSuspenseQueryHookResult = ReturnType<typeof useGetBeMasterDataSuspenseQuery>;
export type GetBeMasterDataQueryResult = Apollo.QueryResult<GetBeMasterDataQuery, GetBeMasterDataQueryVariables>;