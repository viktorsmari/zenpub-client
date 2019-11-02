import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type BasicCollectionFragment = { __typename?: 'Collection' } & Pick<
  Types.Collection,
  | 'id'
  | 'localId'
  | 'preferredUsername'
  | 'name'
  | 'summary'
  | 'icon'
  | 'followed'
> & {
    community: Types.Maybe<
      { __typename?: 'Community' } & Pick<
        Types.Community,
        'id' | 'localId' | 'name' | 'followed'
      >
    >;
    followers: Types.Maybe<
      { __typename?: 'CollectionFollowersConnection' } & Pick<
        Types.CollectionFollowersConnection,
        'totalCount'
      >
    >;
    resources: Types.Maybe<
      { __typename?: 'CollectionResourcesConnection' } & Pick<
        Types.CollectionResourcesConnection,
        'totalCount'
      >
    >;
    inbox: Types.Maybe<
      { __typename?: 'CollectionInboxConnection' } & Pick<
        Types.CollectionInboxConnection,
        'totalCount'
      >
    >;
  };

export const BasicCollectionFragmentDoc = gql`
  fragment BasicCollection on Collection {
    id
    localId
    preferredUsername
    name
    summary
    icon
    followed
    community {
      id
      localId
      name
      followed
    }
    followers {
      totalCount
    }
    resources {
      totalCount
    }
    inbox {
      totalCount
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
