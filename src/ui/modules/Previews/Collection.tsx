import * as React from 'react';
import { FileText } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
import { Trans } from '@lingui/react';
import Button from 'ui/elements/Button';
export interface Props {
  link: {
    url: string;
    external: boolean;
  };
  icon: string;
  name: string;
  summary: string;
  totalResources: number | null;
}

export const Collection: React.SFC<Props> = ({
  link,
  icon,
  name,
  summary,
  totalResources
}) => {
  return (
    <WrapperLink to={link.url}>
      <Wrapper p={3}>
        <Avatar src={icon} />
        <Infos ml={3}>
          <Flex>
            <Box flex={1}>
              <Title>
                {name.length > 80
                  ? name.replace(/^(.{76}[^\s]*).*/, '$1...')
                  : name}
              </Title>
              <Username>@mantarai@moodle.net</Username>
            </Box>
            <Button variant="outline">Follow</Button>
          </Flex>
          <Text variant="text" mt={1} mb={2}>
            {summary && summary.length > 140
              ? summary.replace(/^([\s\S]{140}[^\s]*)[\s\S]*/, '$1...')
              : summary}
          </Text>
          <Actions mt={3}>
            <ActionItem>
              <FileText size={20} />
              {totalResources && (
                <Text flex={1} variant="suptitle">
                  {totalResources} <Trans>resources</Trans>
                </Text>
              )}
            </ActionItem>
          </Actions>
        </Infos>
      </Wrapper>
    </WrapperLink>
  );
};

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  flex: 1;
`;

const WrapperLink = styled(NavLink)`
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
`;

const Actions = styled(Box)``;

const ActionItem = styled(Flex)`
  color: ${props => props.theme.colors.gray};
  text-transform: uppercase;
  align-items: center;
  & svg {
    vertical-align: sub;
    color: inherit !important;
    margin-right: 4px;
  }
`;

const Wrapper = styled(Flex)`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  background: #fff;
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
