import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type BasicResourceFragment = { __typename?: 'Resource' } & Pick<
  Types.Resource,
  | 'id'
  | 'name'
  | 'summary'
  | 'icon'
  | 'url'
  | 'license'
  | 'createdAt'
  | 'updatedAt'
> & {
    collection: { __typename?: 'Collection' } & Pick<
      Types.Collection,
      | 'name'
      | 'canonicalUrl'
      | 'preferredUsername'
      | 'isLocal'
      | 'isPublic'
      | 'isDisabled'
    > & {
        community: { __typename?: 'Community' } & Pick<
          Types.Community,
          'id' | 'canonicalUrl' | 'isLocal'
        >;
      };
  };

export const BasicResourceFragmentDoc = gql`
  fragment BasicResource on Resource {
    id
    name
    summary
    icon
    url
    license
    createdAt
    updatedAt
    collection {
      name
      canonicalUrl
      preferredUsername
      isLocal
      isPublic
      isDisabled
      community {
        id
        canonicalUrl
        isLocal
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
