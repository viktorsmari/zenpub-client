import * as Types from '../../types.d';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';

export type BasicFlagFragment = { __typename?: 'Flag' } & Pick<
  Types.Flag,
  | 'id'
  | 'canonicalUrl'
  | 'createdAt'
  | 'isLocal'
  | 'isPublic'
  | 'isResolved'
  | 'message'
  | 'updatedAt'
> & {
    context:
      | ({ __typename?: 'Collection' } & Pick<
          Types.Collection,
          'id' | 'canonicalUrl' | 'name' | 'isLocal' | 'isPublic' | 'isDisabled'
        > & {
            creator: { __typename?: 'User' } & BasicUserFragment;
          })
      | { __typename?: 'Comment' }
      | ({ __typename?: 'Community' } & Pick<
          Types.Community,
          'id' | 'canonicalUrl' | 'name' | 'isLocal' | 'isPublic' | 'isDisabled'
        > & {
            creator: { __typename?: 'User' } & BasicUserFragment;
          })
      | ({ __typename?: 'Resource' } & Pick<
          Types.Resource,
          'id' | 'canonicalUrl' | 'name' | 'isLocal' | 'isPublic' | 'isDisabled'
        > & {
            creator: { __typename?: 'User' } & BasicUserFragment;
            collection: { __typename?: 'Collection' } & Pick<
              Types.Collection,
              'id' | 'name'
            >;
          })
      | { __typename?: 'User' };
    creator: { __typename?: 'User' } & BasicUserFragment;
  };

export const BasicFlagFragmentDoc = gql`
  fragment BasicFlag on Flag {
    id
    canonicalUrl
    context {
      __typename
      ... on Community {
        id
        canonicalUrl
        name
        isLocal
        isPublic
        isDisabled
        creator {
          ...BasicUser
        }
      }
      ... on Collection {
        id
        canonicalUrl
        name
        isLocal
        isPublic
        isDisabled
        creator {
          ...BasicUser
        }
      }
      ... on Resource {
        id
        canonicalUrl
        name
        isLocal
        isPublic
        isDisabled
        creator {
          ...BasicUser
        }
        collection {
          id
          name
        }
      }
    }
    createdAt
    creator {
      ...BasicUser
    }
    isLocal
    isPublic
    isResolved
    message
    updatedAt
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
