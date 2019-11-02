import * as Types from '../../types.d';

import gql from 'graphql-tag';

export type BasicUserFragment = { __typename?: 'User' } & Pick<
  Types.User,
  | 'name'
  | 'id'
  | 'preferredUsername'
  | 'localId'
  | 'icon'
  | 'location'
  | 'summary'
  | 'image'
>;

export const BasicUserFragmentDoc = gql`
  fragment BasicUser on User {
    name
    id
    preferredUsername
    localId
    icon
    location
    summary
    image
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
