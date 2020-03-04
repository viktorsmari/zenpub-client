import * as React from 'react';
import { Flex, Box, Text } from 'rebass/styled-components';
import media from 'styled-media-query';

import styled from 'ui/themes/styled';
import { useHistory, Link } from 'react-router-dom';
import { ChevronLeft } from 'react-feather';
import { Trans } from '@lingui/react';
import Avatar from 'ui/elements/Avatar';

export interface Props {
  MainThread: JSX.Element;
  Comments: JSX.Element;
  Header: JSX.Element;
  communityId: string;
  communityName: string;
  communityIcon: string;
}

export const Thread: React.FC<Props> = ({
  MainThread,
  Comments,
  communityId,
  communityName,
  communityIcon
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Box mb={2} sx={{ background: 'white' }}>
              <HeaderWrapper
                id={communityId}
                name={communityName}
                icon={communityIcon}
              />
              {MainThread}
            </Box>
            {Comments}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};

const HeaderWrapper: React.FC<{ id: string; name: string; icon: string }> = ({
  id,
  name,
  icon
}) => {
  const history = useHistory();
  return (
    <Header>
      <Left onClick={() => history.goBack()}>
        <Icon>
          <ChevronLeft size="24" />
        </Icon>
        <Text ml={2}>
          <Trans>Back</Trans>
        </Text>
      </Left>
      <Right>
        <Link to={`/communities/${id}`}>
          <LinkImg>
            <Avatar size="s" src={icon} />
          </LinkImg>
          <Text variant="suptitle">{name}</Text>
        </Link>
      </Right>
    </Header>
  );
};

const Left = styled(Flex)`
  flex: auto;
  align-items: center;
`;

const LinkImg = styled(Box)`
  margin-right: 8px;
  .--rtl & {
    margin-right: 0px;
    margin-left: 8px;
  }
`;
const Right = styled(Flex)`
  align-items: center;
  a {
    display: flex;
    align-items: center;
  }
`;

const Header = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  cursor: pointer;
  background: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;

const Icon = styled(Box)`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  &:hover {
    background: ${props => props.theme.colors.lighter};
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
  svg {
    stroke: ${props => props.theme.colors.darkgray};
  }
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
