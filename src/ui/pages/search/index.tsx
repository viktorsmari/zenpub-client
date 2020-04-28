import React, { SFC } from 'react';
import { Box } from 'rebass/styled-components';
import { WrapperPanel } from 'ui/elements/Panel';
import { Header } from 'ui/modules/Header';
import { Props as UserProps } from 'ui/modules/Previews/User';
import { Props as CollectionProps } from 'ui/modules/Previews/Collection';
import { Props as CommunityProps } from 'ui/modules/Previews/Community';
import { Props as ResourceProps } from 'ui/modules/Previews/Resource';
import {
  Wrapper,
  WrapperCont,
  MainContainer,
  HomeBox
} from 'ui/elements/Layout';

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
