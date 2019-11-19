import * as Types from '../../types.d';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';

export type BasicCommunityFragment = { __typename?: 'Community' } & Pick<
  Types.Community,
  | 'id'
  | 'canonicalUrl'
  | 'preferredUsername'
  | 'name'
  | 'summary'
  | 'icon'
  | 'image'
  | 'createdAt'
  | 'updatedAt'
  | 'lastActivity'
  | 'isLocal'
> & {
    creator: { __typename?: 'User' } & BasicUserFragment;
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
    outbox: { __typename?: 'ActivitiesEdges' } & Pick<
      Types.ActivitiesEdges,
      'totalCount'
    >;
  };

export const BasicCommunityFragmentDoc = gql`
  fragment BasicCommunity on Community {
    id
    canonicalUrl
    preferredUsername
    name
    summary
    creator {
      ...BasicUser
    }
    icon
    image
    createdAt
    updatedAt
    lastActivity
    isLocal
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
    outbox {
      totalCount
    }
  }
  ${BasicUserFragmentDoc}
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
            name: 'Flag'
          },
          {
            name: 'Follow'
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
