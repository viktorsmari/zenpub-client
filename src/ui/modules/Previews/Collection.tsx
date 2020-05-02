import { Trans } from '@lingui/react';
import * as React from 'react';
import { Eye, EyeOff } from 'react-feather';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Avatar from 'ui/elements/Avatar';
import { SimpleLink } from 'ui/helpers/SimpleLink';
import styled from 'ui/themes/styled';
import { typography } from 'mn-constants';
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
  hideActions?: boolean;
}

export const Collection: React.FC<Props> = ({
  link,
  icon,
  name,
  summary,
  displayUsername,
  totalResources,
  isFollowing,
  toggleFollowFormik,
  hideActions
}) => {
  return (
    // <WrapperLink to={link.url}>
    <Bordered px={2} m={2} mb={1}>
      <Box mt={2}>
        <AvatarCollection src={icon} />
      </Box>
      <Infos ml={3}>
        <Flex>
          <Box flex={1}>
            <TitleLink link={link}>
              <Title>
                {name.length > 80
                  ? name.replace(/^(.{76}[^\s]*).*/, '$1...')
                  : name}
              </Title>
            </TitleLink>
            <Username>+{displayUsername}</Username>
          </Box>
        </Flex>
        <Summary variant="text" mt={1} mb={2}>
          {summary && summary.length > 140
            ? summary.replace(/^([\s\S]{140}[^\s]*)[\s\S]*/, '$1...')
            : summary}
        </Summary>
        <Meta mt={2}>
          <Flex alignSelf="center" mr={3} alignItems="center">
            <Text fontSize={'10px'} variant="suptitle">
              {totalResources || 0} <Trans>Resources</Trans>
            </Text>
          </Flex>
          {hideActions ? null : (
            <ActionItem
              isFollowing={isFollowing ? true : false}
              onClick={toggleFollowFormik.submitForm}
            >
              <ActionIcon>
                {isFollowing ? (
                  <EyeOff strokeWidth="1" size="18" />
                ) : (
                  <Eye strokeWidth="1" size="18" />
                )}
              </ActionIcon>
              <Text
                ml={1}
                variant={'suptitle'}
                sx={{ textTransform: 'capitalize' }}
              >
                {isFollowing ? <Trans>Unfollow </Trans> : <Trans>follow</Trans>}
              </Text>
            </ActionItem>
          )}
        </Meta>
      </Infos>
    </Bordered>
  );
};

const Summary = styled(Text)`
  color: ${props => props.theme.colors.dark};
`;
const AvatarCollection = styled(Avatar)`
  min-width: 90px !important;
  height: 90px !important;
  background: red !important;
`;

const ActionItem = styled(Flex)<{ isFollowing?: boolean }>`
  align-items: center;
  color: ${props =>
    props.isFollowing
      ? props.theme.colors.lighter
      : props.theme.colors.mediumdark};
  div {
    color: ${props =>
      props.isFollowing
        ? props.theme.colors.lighter
        : props.theme.colors.mediumdark};
  }
  background: ${props =>
    props.isFollowing
      ? props.theme.colors.secondary
      : props.theme.colors.mediumlight};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 8px;
  text-align: center;
  font-size: ${typography.size.s1};
  svg {
    stroke: ${props =>
      props.isFollowing
        ? props.theme.colors.lighter
        : props.theme.colors.mediumdark};
  }
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.mediumdark};
    }
  }
`;

const ActionIcon = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 99999px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: -8px;
  svg {
    margin: 0 auto;
  }
`;

const TitleLink = styled(SimpleLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.darker};
  background: red;
  > a {
    text-decoration: none;
  }
`;

const Meta = styled(Flex)`
  color: ${props => props.theme.colors.medium};
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
  flex: 1;
  font-size: 14px;
  text-transform: lowercase;
`;

const Bordered = styled(Flex)`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.border};
  * {
    text-decoration: none !important;
  }
`;

const Infos = styled(Box)`
  flex: 1;
  position: relative;
  div {
    text-decoration: none;
  }
`;
const Title = styled(Heading)`
  color: ${props => props.theme.colors.darker};
  font-size: 20px;
  text-decoration: none;
  word-break: break-all;
`;
