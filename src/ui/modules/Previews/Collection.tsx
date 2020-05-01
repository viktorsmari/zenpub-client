import { Trans } from '@lingui/react';
import * as React from 'react';
import { Eye, EyeOff } from 'react-feather';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Avatar from 'ui/elements/Avatar';
import { SimpleLink } from 'ui/helpers/SimpleLink';
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
        <Text variant="text" mt={1} mb={2}>
          {summary && summary.length > 140
            ? summary.replace(/^([\s\S]{140}[^\s]*)[\s\S]*/, '$1...')
            : summary}
        </Text>
        <Meta mt={2}>
          <Flex alignSelf="center" mr={3} alignItems="center">
            <Text fontSize={'10px'} variant="suptitle">
              {totalResources || 0} <Trans>Resources</Trans>
            </Text>
          </Flex>
          {hideActions ? null : (
            <ActionItem onClick={toggleFollowFormik.submitForm}>
              <ActionIcon>
                {isFollowing ? (
                  <EyeOff
                    className="hover"
                    strokeWidth="1"
                    color="rgba(0,0,0,.4)"
                    size="20"
                  />
                ) : (
                  <Eye
                    className="hover"
                    strokeWidth="1"
                    color="rgba(0,0,0,.4)"
                    size="20"
                  />
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

const AvatarCollection = styled(Avatar)`
  min-width: 90px;
  height: 90px;
`;

const ActionItem = styled(Flex)`
  align-items: center;
  color: ${props => props.theme.colors.medium};
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.primary};
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
