import { Trans } from '@lingui/react';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
export interface Props {
  link: {
    url: string;
    external: boolean;
  };
  icon: string;
  name: string;
  summary: string;
  displayUsername: string;
  totalResources: number | null;
  isFollowing: boolean;
  toggleFollowFormik: FormikHook;
}

export const Collection: React.FC<Props> = ({
  link,
  icon,
  name,
  summary,
  displayUsername,
  totalResources,
  isFollowing,
  toggleFollowFormik
}) => {
  return (
    // <WrapperLink to={link.url}>
    <Bordered>
      <Wrapper p={2}>
        <Avatar src={icon} />
        <Infos ml={3}>
          <Flex>
            <Box flex={1}>
              <TitleLink to={link.url}>
                <Title>
                  {name.length > 80
                    ? name.replace(/^(.{76}[^\s]*).*/, '$1...')
                    : name}
                </Title>
              </TitleLink>
              <Username>+{displayUsername}</Username>
            </Box>
            {/* {isFollowing ? (
              <Button variant="outline">leave</Button>
            ) : (
              <Button variant="primary">Follow</Button>
            )} */}
          </Flex>
          <Text variant="text" mt={1} mb={2}>
            {summary && summary.length > 140
              ? summary.replace(/^([\s\S]{140}[^\s]*)[\s\S]*/, '$1...')
              : summary}
          </Text>
          {totalResources && totalResources > 0 && (
            <Meta mt={2}>
              <Flex alignSelf="center" mr={3} alignItems="center">
                <Text fontSize={'10px'} variant="suptitle">
                  {totalResources || 0} <Trans>Resources</Trans>
                </Text>
              </Flex>
            </Meta>
          )}
        </Infos>
      </Wrapper>
      <Actions>
        <Box>
          <Items>
            <ActionItem onClick={toggleFollowFormik.submitForm}>
              <Text
                ml={1}
                variant={'suptitle'}
                sx={{ textTransform: 'capitalize' }}
              >
                {isFollowing ? <Trans>Leave</Trans> : <Trans>Follow</Trans>}
              </Text>
            </ActionItem>
          </Items>
        </Box>
      </Actions>
    </Bordered>
    // </WrapperLink>
  );
};

const TitleLink = styled(NavLink)`
  text-decoration: underline;
  color: ${props => props.theme.colors.darkgray};
  &:hover {
    text-decoration: underline;
  }
`;

const Items = styled(Flex)`
  flex: 1;
  justify-content: space-around;
`;

const Actions = styled(Box)`
  position: relative;
  z-index: 999999999999999999999999999999999999;
  border-top: 1px solid #dadada;
  padding: 8px;
  background: white;
`;

const ActionItem = styled(Flex)`
  align-items: center;
  color: ${props => props.theme.colors.gray};
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.orange};
    }
  }
`;

const Meta = styled(Flex)`
  color: ${props => props.theme.colors.gray};
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  flex: 1;
`;

// const WrapperLink = styled(NavLink)`
// text-decoration: none;
// div {
//   text-decoration: none;
//    }
// `;

const Wrapper = styled(Flex)`
  // cursor: pointer;
  position: relative;
  text-decoration: none;
  background: #fff;
`;

const Bordered = styled(Box)`
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 4px;
`;

const Infos = styled(Box)`
  flex: 1;
  position: relative;
  div {
    text-decoration: none;
  }
`;
const Title = styled(Heading)`
  color: ${props => props.theme.colors.darkgray};
  font-size: 20px;
  text-decoration: none;
  word-break: break-all;
`;
