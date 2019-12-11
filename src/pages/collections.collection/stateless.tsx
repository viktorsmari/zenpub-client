// View a Collection (with list of resources)

import * as React from 'react';

import { Trans } from '@lingui/macro';
import { clearFix } from 'polished';
import styled from '../../themes/styled';
import { compose, withState, withHandlers } from 'recompose';
import Loader from '../../components/elements/Loader/Loader';
import EditCollectionModal from '../../components/elements/EditCollectionModal';
import CollectionPage from './collection';
import Join from '../../components/elements/Collection/Join';
import { Settings } from 'react-feather';
import { Text, Flex } from 'rebass/styled-components';
import media from 'styled-media-query';
import { GetCollectionQueryHookResult } from '../../graphql/generated/getCollection.generated';
import { HomeBox, MainContainer } from '../../sections/layoutUtils';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import Header from '../thread/header';
import Empty from '../../components/elements/Empty';
import { SessionContext } from '../../context/global/sessionCtx';
import MoreOptions from '../../components/elements/MoreOptions';

export interface Props {
  collectionQuery: GetCollectionQueryHookResult;
  addNewResource(): void;
  editCollection(): void;
  isEditCollectionOpen(): void;
}

const Component: React.FC<Props> = ({
  collectionQuery: collection,
  addNewResource,
  editCollection,
  isEditCollectionOpen
}) => {
  const { auth } = React.useContext(SessionContext);
  const isMine =
    !!auth &&
    !!collection.data &&
    !!collection.data.collection &&
    auth.me.user.id === collection.data.collection.creator.id;

  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {collection.loading ? (
              <Empty alignItems="center" mt={3}>
                <Loader />
              </Empty>
            ) : collection.error || !collection.data ? (
              <Empty>
                <Trans>Is it not possible to show the collection</Trans>
              </Empty>
            ) : (
              collection.data.collection && (
                <>
                  <Header context={collection.data.collection.community} />
                  <HeroCont>
                    <Hero>
                      <Background
                        style={{
                          backgroundImage: `url(${
                            collection.data.collection.icon
                          })`
                        }}
                      />
                      <HeroInfo>
                        <MoreOptionsContainer>
                          <MoreOptions
                            contextId={collection.data!.collection!.id}
                            myFlag={collection.data.collection.myFlag}
                          />
                        </MoreOptionsContainer>
                        <Title fontSize={5} fontWeight={'bold'}>
                          {collection.data.collection.name}
                        </Title>
                        {collection.data.collection.preferredUsername ? (
                          <Username fontSize={1}>
                            +{collection.data.collection.preferredUsername}
                          </Username>
                        ) : null}
                        <Description fontSize={2} mt={2}>
                          {collection.data.collection &&
                            collection.data.collection.summary &&
                            collection.data.collection.summary
                              .split('\n')
                              .map(function(item, key) {
                                return (
                                  <span key={key}>
                                    {item}
                                    <br />
                                  </span>
                                );
                              })}
                        </Description>
                        <ActionsHero mt={3} alignItems={'center'}>
                          {isMine ? (
                            <EditButton onClick={editCollection}>
                              <Settings size={18} color={'#f98012'} />
                            </EditButton>
                          ) : null}
                          <Join
                            followed={!!collection.data.collection.myFollow}
                            id={collection.data.collection.id}
                            externalId={collection.data.collection.id}
                          />
                        </ActionsHero>
                      </HeroInfo>
                    </Hero>
                  </HeroCont>

                  <CollectionPage
                    collection={collection.data.collection}
                    community_name={collection.data.collection.community.name}
                    resources={collection.data.collection.resources}
                    addNewResource={addNewResource}
                    fetchMore={collection.fetchMore}
                    type={'collection'}
                  />
                  <EditCollectionModal
                    toggleModal={editCollection}
                    modalIsOpen={isEditCollectionOpen}
                    collectionId={collection.data.collection.id}
                    collectionExternalId={collection.data.collection.id}
                    collection={collection.data.collection}
                    collectionUpdated={collection.refetch}
                  />
                </>
              )
            )}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};

const Title = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
`;

const Description = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
`;

const ActionsHero = styled(Flex)``;

const EditButton = styled.span`
  height: 40px;
  font-weight: 600;
  font-size: 13px;
  line-height: 38px;
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 40px;
  vertical-align: bottom;
  margin-right: 16px;
  border-radius: 40px;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.orange};
  cursor: pointer;
  & svg {
    text-align: center;
    vertical-align: text-bottom;
    color: inherit !important;
  }
  .--rtl & {
    margin-right: 0px;
    margin-left: 16px;
  }
`;

const HeroInfo = styled.div`
  flex: 1;
  margin-left: 16px;
  position: relative;
  ${clearFix()};
  & h2 {
    margin: 0;
    line-height: 32px !important;
    font-size: 24px !important;
    color: ${props => props.theme.colors.darkgray};
    ${media.lessThan('medium')`
      margin-top: 8px;
    `};
  }
  & p {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-size: 15px;
    margin-top: 8px;
    color: ${props => props.theme.colors.darkgray};
  }
  .--rtl & {
    margin-right: 16px;
    margin-left: 0px;
  }
`;
const HeroCont = styled.div`
  margin-bottom: 16px;
  border-radius: 6px;
  box-sizing: border-box;
`;

const Hero = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 16px;
  ${media.lessThan('medium')`
  text-align: center;
  display: block;
`};
`;

const Background = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.lightgray};
  position: relative;
  margin: 0 auto;
`;

const MoreOptionsContainer = styled.div`
  float: right;
  position: relative;
`;

export default compose(
  withState('isEditCollectionOpen', 'onEditCollectionOpen', false),
  withHandlers({
    editCollection: props => () =>
      props.onEditCollectionOpen(!props.isEditCollectionOpen)
  })
)(Component);
