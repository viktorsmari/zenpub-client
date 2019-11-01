import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type BasicResourceFragment = { __typename?: 'Resource' } & Pick<
  Types.Resource,
  'id' | 'name' | 'localId' | 'url' | 'summary' | 'icon'
> & {
    collection: Types.Maybe<
      { __typename?: 'Collection' } & Pick<
        Types.Collection,
        'name' | 'localId'
      > & {
          community: Types.Maybe<
            { __typename?: 'Community' } & Pick<Types.Community, 'localId'>
          >;
        }
    >;
  };

export const BasicResourceFragmentDoc = gql`
  fragment BasicResource on Resource {
    id
    name
    localId
    url
    summary
    icon
    collection {
      name
      localId
      community {
        localId
      }
    }
  }
`;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'CommentContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ActivityObject',
        possibleTypes: [
          {
            name: 'Community'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Comment'
          }
        ]
      }
    ]
  }
};

export default result;
