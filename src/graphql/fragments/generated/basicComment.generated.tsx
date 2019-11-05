import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type BasicCommentFragment = { __typename?: 'Comment' } & Pick<
  Types.Comment,
  'localId' | 'content' | 'id' | 'published'
> & {
    author: Types.Maybe<
      { __typename?: 'User' } & Pick<
        Types.User,
        'name' | 'id' | 'icon' | 'preferredUsername' | 'localId'
      >
    >;
    replies: Types.Maybe<
      { __typename?: 'CommentRepliesConnection' } & Pick<
        Types.CommentRepliesConnection,
        'totalCount'
      >
    >;
    inReplyTo: Types.Maybe<
      { __typename?: 'Comment' } & Pick<
        Types.Comment,
        'localId' | 'content'
      > & {
          author: Types.Maybe<
            { __typename?: 'User' } & Pick<
              Types.User,
              'id' | 'icon' | 'name' | 'localId' | 'preferredUsername'
            >
          >;
        }
    >;
    likers: Types.Maybe<
      { __typename?: 'CommentLikersConnection' } & Pick<
        Types.CommentLikersConnection,
        'totalCount'
      >
    >;
    context: Types.Maybe<
      | ({ __typename?: 'Collection' } & Pick<
          Types.Collection,
          'id' | 'name' | 'localId'
        >)
      | ({ __typename?: 'Community' } & Pick<
          Types.Community,
          'id' | 'name' | 'localId'
        >)
    >;
  };

export const BasicCommentFragmentDoc = gql`
  fragment BasicComment on Comment {
    localId
    content
    id
    published
    author {
      name
      id
      icon
      preferredUsername
      localId
    }
    replies {
      totalCount
    }
    inReplyTo {
      localId
      content
      author {
        id
        icon
        name
        localId
        preferredUsername
      }
    }
    likers {
      totalCount
    }
    context {
      __typename
      ... on Community {
        id
        name
        localId
      }
      ... on Collection {
        id
        name
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
