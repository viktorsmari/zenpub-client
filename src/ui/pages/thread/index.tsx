import * as React from 'react';
import { Flex, Box, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { Link } from 'react-router-dom';
import Avatar from 'ui/elements/Avatar';
import { WrapperPanel } from 'ui/elements/Panel';

export interface Props {
  MainThread: JSX.Element;
  Comments: JSX.Element;
  Context: JSX.Element;
  communityId: string;
  communityName: string;
  communityIcon: string;
}

export const Thread: React.FC<Props> = ({
  MainThread,
  Comments,
  communityId,
  communityName,
  communityIcon,
  Context
}) => {
  console.log(Context);
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
              {Context.props.ctx.__typename !== 'Community' && (
                <Box p={2}>{Context}</Box>
              )}
              {MainThread}
            </Box>
            {Comments}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel />
    </MainContainer>
  );
};

const HeaderWrapper: React.FC<{ id: string; name: string; icon: string }> = ({
  id,
  name,
  icon
}) => {
  return (
    <>
      <Header>
        <Right>
          <Link to={`/communities/${id}`}>
            <LinkImg>
              <Avatar size="s" src={icon} />
            </LinkImg>
            <Text variant="suptitle">{name}</Text>
          </Link>
        </Right>
      </Header>
    </>
  );
};

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
