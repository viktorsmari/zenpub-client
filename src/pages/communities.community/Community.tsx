import { Trans } from '@lingui/macro';
import { ActivityPreviewHOC } from 'HOC/modules/ActivityPreview/activityPreviewHOC';
import React, { SFC, useState } from 'react';
// import { i18nMark } from '@lingui/react';
// import { i18n } from '../../containers/App/App';
import { TabPanel, Tabs } from 'react-tabs';
import { Box, Button, Flex } from 'rebass/styled-components';
import FeedItem from '../../components/elements/Comment/Comment';
import CreateCollectionModal from '../../components/elements/CreateCollectionModal';
// import LoadMoreTimeline from '../../components/elements/Loadmore/timeline';
import { SocialText } from '../../components/elements/SocialText';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import { useCreateThreadMutationMutation } from '../../graphql/createThread.generated';
import { GetCommunityQueryQuery } from '../../graphql/getCommunity.generated';
import styled from '../../themes/styled';

// const tt = {
//   placeholders: {
//     thread: i18nMark('Start a new thread...')
//   }
// };
interface Props {
  collections: any;
  followed: boolean;
  id: string;
  fetchMore: any;
  community: GetCommunityQueryQuery['community'];
  refetch: () => unknown;
}

const CommunityPage: SFC<Props> = ({
  collections,
  id,
  followed,
  community,
  fetchMore,
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
          contextId: id
        }
      }).then(() => {
        socialTextRef.current && (socialTextRef.current.value = '');
        refetch();
      });
    },
    [newThreadText, id]
  );
  const socialTextRef = React.useRef<HTMLTextAreaElement>();
  const setNewThreadTextInput = React.useCallback(
    (ev: React.FormEvent<HTMLTextAreaElement>) => {
      setNewThreadText(ev.currentTarget.value);
    },
    []
  );
  return (
    community && (
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
              <SuperTab>
                <h5>
                  <Trans>Discussions</Trans>
                </h5>
              </SuperTab>
            </SuperTabList>
            <TabPanel>
              {followed ? (
                <>
                  <Overlay />
                  <WrapperBox p={3}>
                    <SocialText
                      onInput={setNewThreadTextInput}
                      reference={socialTextRef}
                      submit={addNewThread}
                      placeholder="Start a new thread..."
                    />
                  </WrapperBox>
                </>
              ) : null}
              <div>
                {community.outbox.edges.map(
                  (t, i) =>
                    t && (
                      <ActivityPreviewHOC
                        activityId={t.node.id}
                        key={t.node.id}
                      />
                    )
                )}
                {/* <LoadMoreTimeline fetchMore={fetchMore} community={community} /> */}
              </div>
            </TabPanel>
            <TabPanel>
              {followed ? (
                <ButtonWrapper>
                  <CreateCollection p={3} onClick={() => onOpen(true)} m={3}>
                    <Trans>Create a new collection</Trans>
                  </CreateCollection>
                </ButtonWrapper>
              ) : null}
              <div>{collections}</div>
            </TabPanel>
            <TabPanel>
              {/* {followed ? (
                <>
                  <Overlay />
                  <WrapperBox p={3}>
                    <SocialText
                      onInput={setNewThreadTextInput}
                      reference={socialTextRef}
                      submit={addNewThread}
                      placeholder="Start a new thread..."
                    />
                  </WrapperBox>
                </>
              ) : null} */}
              <div>
                {community.threads &&
                  community.threads.edges &&
                  community.threads.edges.map(
                    (t, i) =>
                      t &&
                      (t.node.comments &&
                        t.node.comments.edges
                          .reverse()
                          .map(
                            edge =>
                              edge &&
                              edge.node &&
                              edge.node.inReplyTo == null && (
                                <FeedItem
                                  key={edge.node.thread.id}
                                  comment={edge.node}
                                />
                              )
                          ))
                  )}
                {/* <LoadMoreTimeline fetchMore={fetchMore} community={community} /> */}
              </div>
            </TabPanel>
          </Tabs>
        </OverlayTab>
        <CreateCollectionModal
          toggleModal={() => onOpen(false)}
          modalIsOpen={isOpen}
          communityId={id}
        />
      </WrapperTab>
    )
  );
};

const Overlay = styled(Box)``;

export const Footer = styled.div`
  height: 30px;
  line-height: 30px;
  font-weight: 600;
  text-align: center;
  background: #ffefd9;
  font-size: 13px;
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  color: #544f46;
`;

const WrapperBox = styled(Box)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
`;

const ButtonWrapper = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
`;

const CreateCollection = styled(Button)`
  flex: 1;
  background: none;
  font-weight: 600;
  cursor: pointer;
  flex: 1;
  border: 1px solid ${props => props.theme.colors.lightgray} !important;
  background: none;
  font-weight: 600;
  color: ${props => props.theme.colors.darkgray} !important;
  cursor: pointer;
  height: 50px;
  text-transform: uppercase;
  font-size: 14px !important;
  &:hover {
    background: ${props => props.theme.colors.lightgray};
  }
`;

export const WrapperTab = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  border-radius: 6px;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
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
