import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type NodeCommunityFragment = { __typename?: 'Community' } & Pick<
  Types.Community,
  | 'id'
  | 'name'
  | 'localId'
  | 'summary'
  | 'icon'
  | 'preferredUsername'
  | 'followed'
> & {
    collections: Types.Maybe<
      { __typename?: 'CommunityCollectionsConnection' } & Pick<
        Types.CommunityCollectionsConnection,
        'totalCount'
      >
    >;
    members: Types.Maybe<
      { __typename?: 'CommunityMembersConnection' } & Pick<
        Types.CommunityMembersConnection,
        'totalCount'
      >
    >;
    threads: Types.Maybe<
      { __typename?: 'CommunityThreadsConnection' } & Pick<
        Types.CommunityThreadsConnection,
        'totalCount'
      >
    >;
  };

export const NodeCommunityFragmentDoc = gql`
  fragment NodeCommunity on Community {
    id
    name
    localId
    summary
    icon
    preferredUsername
    followed
    collections {
      totalCount
    }
    members {
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
