import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type BasicUserFragment = { __typename?: 'User' } & Pick<
  Types.User,
  | 'id'
  | 'canonicalUrl'
  | 'preferredUsername'
  | 'name'
  | 'icon'
  | 'location'
  | 'summary'
  | 'image'
  | 'isLocal'
  | 'isPublic'
  | 'isDisabled'
  | 'createdAt'
  | 'updatedAt'
  | 'lastActivity'
> & {
    myFollow: Types.Maybe<{ __typename?: 'Follow' } & Pick<Types.Follow, 'id'>>;
    myLike: Types.Maybe<{ __typename?: 'Like' } & Pick<Types.Like, 'id'>>;
    primaryLanguage: Types.Maybe<
      { __typename?: 'Language' } & Pick<
        Types.Language,
        'id' | 'englishName' | 'localName'
      >
    >;
  };

export const BasicUserFragmentDoc = gql`
  fragment BasicUser on User {
    id
    canonicalUrl
    preferredUsername
    name
    icon
    location
    summary
    image
    isLocal
    isPublic
    isDisabled
    createdAt
    updatedAt
    lastActivity
    myFollow {
      id
    }
    myLike {
      id
    }
    primaryLanguage {
      id
      englishName
      localName
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
      }
    ]
  }
};

export default result;
