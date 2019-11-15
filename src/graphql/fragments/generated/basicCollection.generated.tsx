import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type BasicCollectionFragment = { __typename?: 'Collection' } & Pick<
  Types.Collection,
  | 'id'
  | 'canonicalUrl'
  | 'preferredUsername'
  | 'name'
  | 'summary'
  | 'icon'
  | 'isLocal'
  | 'isPublic'
> & {
    creator: { __typename?: 'User' } & Pick<Types.User, 'id'>;
    myFollow: Types.Maybe<{ __typename?: 'Follow' } & Pick<Types.Follow, 'id'>>;
    community: { __typename?: 'Community' } & Pick<
      Types.Community,
      'id' | 'canonicalUrl' | 'isLocal' | 'isPublic' | 'name' | 'icon'
    > & {
        myFollow: Types.Maybe<
          { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
        >;
      };
    followers: { __typename?: 'FollowsEdges' } & Pick<
      Types.FollowsEdges,
      'totalCount'
    >;
    threads: { __typename?: 'ThreadsEdges' } & Pick<
      Types.ThreadsEdges,
      'totalCount'
    >;
    outbox: { __typename?: 'ActivitiesEdges' } & Pick<
      Types.ActivitiesEdges,
      'totalCount'
    >;
  };

export const BasicCollectionFragmentDoc = gql`
  fragment BasicCollection on Collection {
    id
    canonicalUrl
    preferredUsername
    name
    summary
    creator {
      id
    }
    icon
    isLocal
    isPublic
    myFollow {
      id
    }
    community {
      id
      canonicalUrl
      isLocal
      isPublic
      name
      icon
      myFollow {
        id
      }
    }
    followers {
      totalCount
    }
    threads {
      totalCount
    }
    outbox {
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
        name: 'ActivityContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FlagContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'LikeContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ThreadContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FollowContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'DeleteContext',
        possibleTypes: [
          {
            name: 'Activity'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Country'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Follow'
          },
          {
            name: 'Language'
          },
          {
            name: 'Like'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      }
    ]
  }
};

export default result;
