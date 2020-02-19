import * as Types from '../../../graphql/types.generated';

import { HeroCommunityDataFragment } from '../../modules/HeroCommunity/HeroCommunity.generated';
import gql from 'graphql-tag';
import { HeroCommunityDataFragmentDoc } from '../../modules/HeroCommunity/HeroCommunity.generated';


export type CommunityPageBaseFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
  & HeroCommunityDataFragment
);

export const CommunityPageBaseFragmentDoc = gql`
    fragment CommunityPageBase on Community {
  id
  myFollow {
    id
  }
  ...HeroCommunityData
}
    ${HeroCommunityDataFragmentDoc}`;
