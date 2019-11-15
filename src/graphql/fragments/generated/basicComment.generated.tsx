import * as Types from '../../types.d';

import gql from 'graphql-tag';

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
    creator: { __typename?: 'User' } & Pick<
      Types.User,
      | 'id'
      | 'canonicalUrl'
      | 'preferredUsername'
      | 'name'
      | 'icon'
      | 'isLocal'
      | 'isPublic'
      | 'isDisabled'
    >;
    likes: { __typename?: 'LikesEdges' } & Pick<Types.LikesEdges, 'totalCount'>;
    thread: { __typename?: 'Thread' } & Pick<Types.Thread, 'id'> & {
        context:
          | ({ __typename?: 'Collection' } & Pick<
              Types.Collection,
              | 'id'
              | 'canonicalUrl'
              | 'name'
              | 'isLocal'
              | 'isPublic'
              | 'isDisabled'
            >)
          | ({ __typename?: 'Community' } & Pick<
              Types.Community,
              | 'id'
              | 'canonicalUrl'
              | 'name'
              | 'isLocal'
              | 'isPublic'
              | 'isDisabled'
            >)
          | { __typename?: 'Flag' }
          | { __typename?: 'Resource' };
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
    creator {
      id
      canonicalUrl
      preferredUsername
      name
      icon
      isLocal
      isPublic
      isDisabled
    }
    likes {
      totalCount
    }
    thread {
      id
      context {
        __typename
        ... on Community {
          id
          canonicalUrl
          name
          isLocal
          isPublic
          isDisabled
        }
        ... on Collection {
          id
          canonicalUrl
          name
          isLocal
          isPublic
          isDisabled
        }
      }
    }
  }
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
