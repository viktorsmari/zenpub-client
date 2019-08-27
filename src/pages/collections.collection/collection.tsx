import * as React from 'react';
import { SFC } from 'react';
import { Trans } from '@lingui/macro';
import { Tabs, TabPanel } from 'react-tabs';
import styled from '../../themes/styled';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import ResourceCard from '../../components/elements/Resource/Resource';
// import { Resource } from '../../components/elements/Icons';
import Link from '../../components/elements/Link/Link';
import media from 'styled-media-query';

import {
  Footer,
  WrapperTab,
  OverlayTab
} from '../communities.community/Community';
// import CollectionsLoadMore from 'src/components/elements/Loadmore/followingCollections';

interface Props {
  collection: any;
  community_name: string;
  resources: any;
  fetchMore: any;
  type: string;
  match: any;
  addNewResource: any;
}

const CommunityPage: SFC<Props> = ({
  collection,
  community_name,
  resources,
  fetchMore,
  addNewResource,
  type
}) => {
  return (
    <WrapperTab>
      <OverlayTab>
        <Tabs defaultIndex={1}>
          <SuperTabList>
            <SuperTab>
              <h5>
                <Trans>Resources</Trans> ({collection.resources.totalCount}
                /10)
              </h5>
            </SuperTab>
          </SuperTabList>

          <TabPanel>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              <Wrapper>
                {resources.totalCount > 9 ? null : collection.community
                  .followed ? null : (
                  <Footer>
                    <Trans>Join the community</Trans>{' '}
                    <Link to={'/communities/' + collection.community.localId}>
                      {community_name}
                    </Link>{' '}
                    <Trans>to add a resource</Trans>
                  </Footer>
                )}
                <CollectionList>
                  {/* {collection.community.followed &&
                  resources.totalCount < 10 ? (
                    <>
                      <Create onClick={addNewResource}>
                        <span>
                          <Resource
                            width={40}
                            height={40}
                            strokeWidth={1}
                            color={'#f98012'}
                          />
                        </span>
                        <Trans>Add a new resource</Trans>
                      </Create>
                    </>
                  ) : null} */}
                  {resources.edges.map((edge, i) => (
                    <ResourceCard
                      key={i}
                      icon={edge.node.icon}
                      title={edge.node.name}
                      summary={edge.node.summary}
                      url={edge.node.url}
                      localId={edge.node.localId}
                    />
                  ))}
                </CollectionList>
              </Wrapper>
            </div>
          </TabPanel>
        </Tabs>
      </OverlayTab>
    </WrapperTab>
  );
};

// const Create = styled.div`
//   background: ${props => props.theme.styles.colour.resourceBg};
//   padding: 20px;
//   margin-bottom: 8px;
//   border-radius: 3px;
//   border: 2px dashed #f98012;
//   cursor: pointer;
//   text-align: center;
//   max-height: 120px;
//   color: #f98012;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   & span {
//     display: block;
//     text-align: center;
//     // margin-top: 60px;
//     margin-bottom: 8px;
//   }
//   ${media.lessThan('medium')`
//   display: block;
//   padding: 0;
//   padding: 20px;
//   & span {
//     margin-top: 10px;
//   }
//   & a {
//     text-decoration: none;
//   }
// &:last-of-type {
//   margin-bottom: 0;
//   border-bottom: 0px;
// }
// `};
// `;
const Wrapper = styled.div`
  flex: 1;
`;

const CollectionList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  padding-top: 0;
  ${media.lessThan('medium')`
grid-template-columns: 1fr;
`};
`;

export default CommunityPage;
