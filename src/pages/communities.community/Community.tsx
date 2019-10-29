import { Trans } from '@lingui/macro';
import React, { SFC, useState } from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import { Box, Button, Flex } from 'rebass';
import CommunityModal from '../../components/elements/CommunityModal';
import LoadMoreTimeline from '../../components/elements/Loadmore/timeline';
import { SocialText } from '../../components/elements/SocialText';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem';
import { useCreateThreadMutationMutation } from '../../generated/graphqlapollo';
import styled from '../../themes/styled';

interface Props {
  collections: any;
  community: any;
  fetchMore: any;
  type: string;
  match: any;
  refetch: () => unknown;
}

const CommunityPage: SFC<Props> = ({
  collections,
  community,
  fetchMore,
  match,
  type,
  refetch
}) => {
  const [createThreadMutation] = useCreateThreadMutationMutation();
  const [isOpen, onOpen] = useState(false);
  const [newThreadText, setNewThreadText] = React.useState('');
  const addNewThread = React.useCallback(
    () => {
      createThreadMutation({
        variables: {
          comment: { content: newThreadText },
          id: community.localId
        }
      }).then(() => {
        socialTextRef.current && (socialTextRef.current.value = '');
        refetch();
      });
    },
    [newThreadText, community.localId]
  );
  const socialTextRef = React.useRef<HTMLTextAreaElement>();
  const setNewThreadTextInput = React.useCallback(
    (ev: React.FormEvent<HTMLTextAreaElement>) => {
      setNewThreadText(ev.currentTarget.value);
    },
    []
  );
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
            {/* <SuperTab>
            <h5>
              <Trans>Discussions</Trans>
            </h5>
          </SuperTab> */}
          </SuperTabList>
          <TabPanel>
            <Box m={3}>
              <SocialText
                onInput={setNewThreadTextInput}
                reference={socialTextRef}
                submit={addNewThread}
                placeholder="Start a new thread..."
              />
            </Box>
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

const ButtonWrapper = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.styles.colors.lightgray};
`;

const CreateCollection = styled(Button)`
  flex: 1;
  background: none;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  border: 1px solid ${props => props.theme.styles.colors.lightgray} !important;
  background: none;
  font-weight: 600;
  color: ${props => props.theme.styles.colors.darkgray} !important;
  cursor: pointer;
  padding: 16px;
  text-transform: uppercase;
  font-size: 14px !important;
  &:hover {
    background: ${props => props.theme.styles.colors.lightgray};
  }
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
