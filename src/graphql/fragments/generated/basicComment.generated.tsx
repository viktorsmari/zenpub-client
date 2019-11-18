import * as Types from '../../types.d';

import { BasicResourceFragment } from './basicResource.generated';
import { BasicCollectionFragment } from './basicCollection.generated';
import { BasicCommunityFragment } from './basicCommunity.generated';
import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';
import { BasicCommunityFragmentDoc } from './basicCommunity.generated';
import { BasicCollectionFragmentDoc } from './basicCollection.generated';
import { BasicResourceFragmentDoc } from './basicResource.generated';

export type BasicCommentWithInReplyToFragment = { __typename?: 'Comment' } & {
  inReplyTo: Types.Maybe<{ __typename?: 'Comment' } & BasicCommentFragment>;
} & BasicCommentFragment;

export type BasicCommentFragment = { __typename?: 'Comment' } & Pick<
  Types.Comment,
  | 'id'
  | 'content'
  | 'isLocal'
  | 'isPublic'
  | 'isHidden'
  | 'createdAt'
  | 'updatedAt'
> & {
    myLike: Types.Maybe<{ __typename?: 'Like' } & Pick<Types.Like, 'id'>>;
    creator: { __typename?: 'User' } & BasicUserFragment;
    likes: { __typename?: 'LikesEdges' } & Pick<Types.LikesEdges, 'totalCount'>;
    thread: { __typename?: 'Thread' } & Pick<Types.Thread, 'id'> & {
        context:
          | ({ __typename?: 'Collection' } & BasicCollectionFragment)
          | ({ __typename?: 'Community' } & BasicCommunityFragment)
          | { __typename?: 'Flag' }
          | ({ __typename?: 'Resource' } & BasicResourceFragment);
      };
  };

export const BasicCommentFragmentDoc = gql`
  fragment BasicComment on Comment {
    id
    content
    isLocal
    isPublic
    isHidden
    createdAt
    updatedAt
    myLike {
      id
    }
    creator {
      ...BasicUser
    }
    likes {
      totalCount
    }
    thread {
      id
      context {
        __typename
        ... on Community {
          ...BasicCommunity
        }
        ... on Collection {
          ...BasicCollection
        }
        ... on Resource {
          ...BasicResource
        }
      }
    }
  }
  ${BasicUserFragmentDoc}
  ${BasicCommunityFragmentDoc}
  ${BasicCollectionFragmentDoc}
  ${BasicResourceFragmentDoc}
`;
export const BasicCommentWithInReplyToFragmentDoc = gql`
  fragment BasicCommentWithInReplyTo on Comment {
    ...BasicComment
    inReplyTo {
      ...BasicComment
    }
  }
  ${BasicCommentFragmentDoc}
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
