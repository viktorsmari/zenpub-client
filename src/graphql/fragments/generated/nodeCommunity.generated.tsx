import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type NodeCommunityFragment = { __typename?: 'Community' } & Pick<
  Types.Community,
  | 'id'
  | 'canonicalUrl'
  | 'preferredUsername'
  | 'name'
  | 'summary'
  | 'icon'
  | 'image'
  | 'isLocal'
  | 'isPublic'
  | 'isDisabled'
  | 'createdAt'
  | 'updatedAt'
  | 'lastActivity'
> & {
    primaryLanguage: Types.Maybe<
      { __typename?: 'Language' } & Pick<
        Types.Language,
        'id' | 'englishName' | 'localName'
      >
    >;
    myFollow: Types.Maybe<{ __typename?: 'Follow' } & Pick<Types.Follow, 'id'>>;
    collections: { __typename?: 'CollectionsEdges' } & Pick<
      Types.CollectionsEdges,
      'totalCount'
    >;
    followers: { __typename?: 'FollowsEdges' } & Pick<
      Types.FollowsEdges,
      'totalCount'
    >;
    threads: { __typename?: 'ThreadsEdges' } & Pick<
      Types.ThreadsEdges,
      'totalCount'
    >;
  };

export const NodeCommunityFragmentDoc = gql`
  fragment NodeCommunity on Community {
    id
    canonicalUrl
    preferredUsername
    name
    summary
    icon
    image
    isLocal
    isPublic
    isDisabled
    createdAt
    updatedAt
    lastActivity
    primaryLanguage {
      id
      englishName
      localName
    }
    myFollow {
      id
    }
    collections {
      totalCount
    }
    followers {
      totalCount
    }
    threads {
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
