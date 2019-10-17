import { Trans } from '@lingui/macro';
import * as React from 'react';
import { SFC } from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import LoadMoreTimeline from '../../components/elements/Loadmore/timeline';
import { SocialText } from '../../components/elements/SocialText';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import TimelineItem from '../../components/elements/TimelineItem';
import { GqlSdkCtx } from '../../containers/App/ProvideGqlSdk';
// import Discussion from '../../components/chrome/Discussion/Discussion';
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
  // const { dispatch } = React.useContext(ActionContext);
  // const history = useHistory();
  const sdk = React.useContext(GqlSdkCtx);
  const [newThreadText, setNewThreadText] = React.useState('');
  const addNewThread = React.useCallback(
    () => {
      // dispatch(
      //   gqlRequest.create({
      //     op: {
      //       createThreadMutation: [
      //         { comment: { content: newThreadText }, id: community.localId }
      //       ]
      //     },
      //     replyTo: null
      //   })
      // );
      sdk
        .createThreadMutation({
          comment: { content: newThreadText },
          id: community.localId
        })
        .then(() => {
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
            <SocialText
              onInput={setNewThreadTextInput}
              reference={socialTextRef}
            />
            <button onClick={addNewThread} disabled={!newThreadText.length}>
              send
            </button>
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
            <div>{collections}</div>
          </TabPanel>
          {/* <TabPanel>
          {community.followed ? (
            <Discussion
              localId={community.localId}
              id={community.id}
              threads={community.threads}
              followed
              type={type}
              match={match}
            />
          ) : (
            <>
              <Discussion
                localId={community.localId}
                id={community.id}
                threads={community.threads}
                type={type}
              />
              <Footer>
                <Trans>Join the community to participate in discussions</Trans>
              </Footer>
            </>
          )}
        </TabPanel> */}
        </Tabs>
      </OverlayTab>
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
