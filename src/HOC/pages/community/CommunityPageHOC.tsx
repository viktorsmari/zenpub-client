import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import { CreateCollectionPanelHOC } from 'HOC/modules/CreateCollectionPanel/createCollectionPanelHOC';
import { HeroCommunityHOC } from 'HOC/modules/HeroCommunity/heroCommuityHOC';
import React, {
  createContext,
  SFC,
  useContext,
  useEffect,
  useMemo
} from 'react';
import { useHistory } from 'react-router-dom';
import CommunityPage, { Props as CommunityProps } from 'ui/pages/community';
import * as CPGQL from './CommunityPage.generated';
import { CommunityPageActivities } from './CommunityPageActivities';
import { CommunityPageCollections } from './CommunityPageCollections';
import { CommunityPageThreads } from './CommunityPageThreads';

export interface Props {
  communityId: Community['id'];
}

export interface CommunityPageCtx {
  useCommunityPageQuery: typeof CPGQL.useCommunityPageQuery;
  useCommunityPageCreateThreadMutation: typeof CPGQL.useCommunityPageCreateThreadMutation;
}
export const CommunityPageCtx = createContext<CommunityPageCtx>({
  useCommunityPageQuery: CPGQL.useCommunityPageQuery,
  useCommunityPageCreateThreadMutation:
    CPGQL.useCommunityPageCreateThreadMutation
});

export const CommunityPageHOC: SFC<Props> = ({ communityId }) => {
  const history = useHistory();
  const {
    useCommunityPageQuery,
    useCommunityPageCreateThreadMutation
  } = useContext(CommunityPageCtx);
  const [
    createThreadMut,
    createThreadMutStatus
  ] = useCommunityPageCreateThreadMutation();
  const newThreadFormik = useFormik<{ text: string }>({
    initialValues: { text: '' },
    onSubmit: ({ text }) => {
      if (
        !text ||
        createThreadMutStatus.loading ||
        !communityQ.data ||
        !communityQ.data.community
      ) {
        return;
      }
      return createThreadMut({
        variables: {
          contextId: communityQ.data.community.id,
          comment: { content: text }
        }
      }).then(res => {
        const newThreadId =
          res.data &&
          res.data.createThread &&
          res.data.createThread.thread &&
          res.data.createThread.thread.id;
        if (newThreadId) {
          history.push(`/thread/${newThreadId}`);
        }
      });
    }
  });

  const communityQ = useCommunityPageQuery({ variables: { communityId } });
  useEffect(() => {
    communityQ.refetch();
  }, []);
  const communityPageProps = useMemo<CommunityProps | null>(
    () => {
      if (
        communityQ.error ||
        communityQ.loading ||
        !communityQ.data ||
        !communityQ.data.community
      ) {
        return null;
      }

      const ActivitiesBox = (
        <CommunityPageActivities communityId={communityId} />
      );

      const CollectionsBox = (
        <CommunityPageCollections communityId={communityId} />
      );

      const ThreadsBox = <CommunityPageThreads communityId={communityId} />;

      const HeroCommunityBox = <HeroCommunityHOC communityId={communityId} />;
      const CreateCollectionPanel: CommunityProps['CreateCollectionPanel'] = ({
        done
      }) => (
        // <CreateCollectionPanelCtx.Provider value={{ refetchQueries }}>
        <CreateCollectionPanelHOC done={done} communityId={communityId} />
        // </CreateCollectionPanelCtx.Provider>
      );
      const myFollow = communityQ.data.community.myFollow;
      const props: CommunityProps = {
        CreateCollectionPanel,
        ActivitiesBox,
        CollectionsBox,
        HeroCommunityBox,
        ThreadsBox,
        basePath: `/communities/${communityId}`,
        newThreadFormik: myFollow ? newThreadFormik : null
      };
      return props;
    },
    [communityQ]
  );
  return communityPageProps && <CommunityPage {...communityPageProps} />;
};
