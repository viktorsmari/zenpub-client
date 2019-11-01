import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type BasicCommunityFragment = { __typename?: 'Community' } & Pick<
  Types.Community,
  | 'id'
  | 'name'
  | 'localId'
  | 'summary'
  | 'icon'
  | 'preferredUsername'
  | 'followed'
>;

export const BasicCommunityFragmentDoc = gql`
  fragment BasicCommunity on Community {
    id
    name
    localId
    summary
    icon
    preferredUsername
    followed
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
