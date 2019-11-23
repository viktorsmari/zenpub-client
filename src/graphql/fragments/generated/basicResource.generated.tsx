import * as Types from '../../types.generated.d';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';


export type BasicResourceFragment = (
  { __typename?: 'Resource' }
  & Pick<Types.Resource, 'id' | 'name' | 'summary' | 'icon' | 'url' | 'license' | 'createdAt' | 'updatedAt'>
  & { myLike: Types.Maybe<(
    { __typename?: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, likes: (
    { __typename?: 'LikesEdges' }
    & Pick<Types.LikesEdges, 'totalCount'>
  ), creator: (
    { __typename?: 'User' }
    & BasicUserFragment
  ), collection: (
    { __typename?: 'Collection' }
    & Pick<Types.Collection, 'id' | 'name' | 'preferredUsername' | 'isLocal' | 'isPublic' | 'isDisabled'>
    & { community: (
      { __typename?: 'Community' }
      & Pick<Types.Community, 'id' | 'canonicalUrl' | 'isLocal'>
    ) }
  ) }
);

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
  myLike {
    id
  }
  likes {
    totalCount
  }
  creator {
    ...BasicUser
  }
  collection {
    id
    name
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
    ${BasicUserFragmentDoc}`;

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
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "ActivityContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Resource"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FlagContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LikeContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ThreadContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Resource"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FollowContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Thread"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteContext",
        "possibleTypes": [
          {
            "name": "Activity"
          },
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Follow"
          },
          {
            "name": "Like"
          },
          {
            "name": "Resource"
          },
          {
            "name": "Thread"
          },
          {
            "name": "User"
          }
        ]
      }
    ]
  }
};

      export default result;
    