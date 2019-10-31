import { Trans } from '@lingui/macro';
import gql from 'graphql-tag';
import React from 'react';
import { graphql, OperationOption } from 'react-apollo';
import { compose } from 'recompose';
import styled from '../../themes/styled';
import { Button } from 'rebass';
const {
  joinCommunityMutation
} = require('../../graphql/joinCommunity.graphql');
const {
  undoJoinCommunityMutation
} = require('../../graphql/undoJoinCommunity.graphql');

interface Props {
  joinCommunity: any;
  leaveCommunity: any;
  id: string;
  followed: boolean;
  externalId: string;
}

const withJoinCommunity = graphql<{}>(joinCommunityMutation, {
  name: 'joinCommunity'
  // TODO enforce proper types for OperationOption
} as OperationOption<{}, {}>);

const withLeaveCommunity = graphql<{}>(undoJoinCommunityMutation, {
  name: 'leaveCommunity'
  // TODO enforce proper types for OperationOption
} as OperationOption<{}, {}>);

const Join: React.FC<Props> = ({
  joinCommunity,
  id,
  leaveCommunity,
  externalId,
  followed
}) => {
  if (followed) {
    return (
      <Span
        onClick={() =>
          leaveCommunity({
            variables: { communityId: id },
            update: (proxy, { data: { undoJoinCommunity } }) => {
              const fragment = gql`
                fragment Res on Community {
                  followed
                }
              `;
              let collection = proxy.readFragment({
                id: `Community:${externalId}`,
                fragment: fragment,
                fragmentName: 'Res'
              });
              collection.followed = !collection.followed;
              proxy.writeFragment({
                id: `Community:${externalId}`,
                fragment: fragment,
                fragmentName: 'Res',
                data: collection
              });
            }
          })
            .then(res => {
              console.log(res);
            })
            .catch(err => console.log(err))
        }
      >
        <Trans>Leave</Trans>
      </Span>
    );
  } else {
    return (
      <JoinButton
        onClick={() =>
          joinCommunity({
            variables: { communityId: id },
            update: (proxy, { data: { joinCommunity } }) => {
              const fragment = gql`
                fragment Res on Community {
                  followed
                }
              `;
              let collection = proxy.readFragment({
                id: `Community:${externalId}`,
                fragment: fragment,
                fragmentName: 'Res'
              });
              collection.followed = !collection.followed;
              proxy.writeFragment({
                id: `Community:${externalId}`,
                fragment: fragment,
                fragmentName: 'Res',
                data: collection
              });
            }
          })
            .then(res => {
              console.log(res);
            })
            .catch(err => console.log(err))
        }
      >
        <Trans>Join</Trans>
      </JoinButton>
    );
  }
};

const JoinButton = styled(Button)`
  border: 1px solid ${props => props.theme.styles.colors.orange} !important;
  font-size: 11px !important;
  color: ${props => props.theme.styles.colors.darkgray} !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  background: transparent !important;
  cursor: pointer;
  height: 30px !important;
  border-radius: 2px !important;
`;

const Span = styled.div`
  cursor: pointer;
  text-align: center;
  border-radius: 3px;
  margin-left: 8px;
  box-sizing: border-box;
  display: inline-block;
  padding: 4px 32px;
  min-width: 0;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.styles.colors.orange};
  font-size: 11px;
  line-height: 29px;
  color: ${props => props.theme.styles.colors.darkgray};
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default compose(
  withJoinCommunity,
  withLeaveCommunity
)(Join);
