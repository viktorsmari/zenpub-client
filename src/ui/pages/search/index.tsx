import React, { SFC } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { WrapperPanel } from 'ui/elements/Panel';
import { Header } from 'ui/modules/Header';
import { Props as UserProps } from 'ui/modules/Previews/User';
import { Props as CollectionProps } from 'ui/modules/Previews/Collection';
import { Props as CommunityProps } from 'ui/modules/Previews/Community';
import { Props as ResourceProps } from 'ui/modules/Previews/Resource';

export interface Props {
  hits: Result[];
}

export type Result =
  | UserProps
  | CollectionProps
  | CommunityProps
  | ResourceProps;

export const Search: SFC<Props> = ({ hits }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.1.1/themes/reset-min.css"
      />

      <MainContainer>
        <HomeBox>
          <WrapperCont>
            <Wrapper>
              <Header name="Search results" />
              <Box>{hits}</Box>
            </Wrapper>
          </WrapperCont>
        </HomeBox>
        <WrapperPanel />
      </MainContainer>
    </>
  );
};

export const HomeBox = styled(Flex)`
  width: 600px;
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
  background: white;
  min-width: 0px;
  padding: 0px;
  position: relative;
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
