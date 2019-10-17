import { SFC } from 'react';
import { Trans } from '@lingui/macro';
import { Tabs, TabPanel } from 'react-tabs';
import styled from '../../themes/styled';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem';
import LoadMoreTimeline from '../../components/elements/Loadmore/timeline';
import { Button, Flex } from 'rebass';
import React, { useState } from 'react';
import CommunityModal from '../../components/elements/CommunityModal';

interface Props {
  collections: any;
  community: any;
  fetchMore: any;
  type: string;
  match: any;
}

const CommunityPage: SFC<Props> = ({ collections, community, fetchMore }) => {
  const [isOpen, onOpen] = useState(false);
  console.log(community);
  return (
    <WrapperTab>
      <OverlayTab>
        <Tabs defaultIndex={1}>
          <SuperTabList>
            <SuperTab>
              <h5>
                <Trans>Recent activities</Trans>
              </h5>
            </SuperTab>
            <SuperTab>
              <h5>
                <Trans>Collections</Trans>
              </h5>
            </SuperTab>
          </SuperTabList>
          <TabPanel>
            <div>
              {community.inbox.edges.map((t, i) => (
                <TimelineItem node={t.node} user={t.node.user} key={i} />
              ))}
              <div style={{ padding: '8px' }}>
                <LoadMoreTimeline fetchMore={fetchMore} community={community} />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            {community.followed ? (
              <ButtonWrapper>
                <CreateCollection p={3} onClick={() => onOpen(true)} m={3}>
                  <Trans>Create a new collection</Trans>
                </CreateCollection>
              </ButtonWrapper>
            ) : null}
            <div>{collections}</div>
          </TabPanel>
        </Tabs>
      </OverlayTab>
      <CommunityModal
        toggleModal={() => onOpen(false)}
        modalIsOpen={isOpen}
        communityId={community.localId}
      />
    </WrapperTab>
  );
};

const ButtonWrapper = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.styles.colors.lightgray};
`;
export const Footer = styled.div`
  height: 30px;
  line-height: 30px;
  font-weight: 600;
  text-align: center;
  background: #ffefd9;
  font-size: 13px;
  border-bottom: 1px solid ${props => props.theme.styles.colour.divider};
  color: #544f46;
`;

const CreateCollection = styled(Button)`
  flex: 1;
  border: 2px solid ${props => props.theme.styles.colors.orange} !important;
  background: none;
  font-weight: 600;
  color: ${props => props.theme.styles.colors.darkgray} !important;
  cursor: pointer;
`;

export const WrapperTab = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  border-radius: 6px;
  height: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 6px;
  box-sizing: border-box;
  background: ${props => props.theme.styles.colour.secondaryBg};
`;
export const OverlayTab = styled.div`
  height: 100%;
  width: 100%;
  & > div {
    flex: 1;
    height: 100%;
  }
`;

export default CommunityPage;
