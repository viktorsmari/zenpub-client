import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Flex, Box } from 'rebass/styled-components';
import media from 'styled-media-query';

import styled from 'ui/themes/styled';
// import { Link } from 'react-feather';

export interface Props {
  CommunityBoxes: JSX.Element;
  Header: JSX.Element;
  basePath: string;
}

export const AllCommunities: React.FC<Props> = ({
  CommunityBoxes,
  basePath,
  Header
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {Header}
            <Switch>
              <Route exact path={`${basePath}/`}>
                <WrapperBoxes>{CommunityBoxes}</WrapperBoxes>
              </Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};
const WrapperBoxes = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  padding: 8px;
`;

export const HomeBox = styled(Flex)`
  max-width: 600px;
  width: 100%;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
  ${media.lessThan('1005px')`
    max-width: 100%;
  `};
  // ${media.lessThan('1280px')`
  // top: 60px;
  // `};
`;

export const MainContainer = styled(Flex)`
  align-items: stretch;
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
`;

export const WrapperCont = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  background: white;
  border-radius: 6px;
  z-index: 0;
`;

export const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex: 1;
  & ul {
    display: block;

    & li {
      display: inline-block;

      & h5 {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
  & h4 {
    margin: 0;
    font-weight: 400 !important;
    font-size: 14px !important;
    color: #151b26;
    line-height: 40px;
  }
`;
