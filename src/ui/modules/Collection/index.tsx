import * as React from 'react';
import styled from 'ui/themes/styled';
import { Flex, Box, Text, Heading } from 'rebass/styled-components';
import { FileText } from 'react-feather';
import Avatar from 'ui/elements/Avatar';

interface CollectionProps {
  id: string;
  icon: string;
  name: string;
  summary: string;
  totalResources: number;
}
/**
 * Collection component.
 */
const Component: React.SFC<CollectionProps> = ({
  id,
  icon,
  name,
  summary,
  totalResources
}) => (
  <Wrapper p={3}>
    <Avatar size="m" src={icon} />
    <Infos>
      <Title>
        {name.length > 80 ? name.replace(/^(.{76}[^\s]*).*/, '$1...') : name}
      </Title>

      <Text variant="text" mt={2} mb={3}>
        {summary && summary.length > 320
          ? summary.replace(/^([\s\S]{316}[^\s]*)[\s\S]*/, '$1...')
          : summary}
      </Text>
      <Actions>
        <ActionItem>
          <FileText size={20} color={'#8b98a2'} />
          <Text variant="suptitle">{totalResources}</Text>
        </ActionItem>
      </Actions>
    </Infos>
  </Wrapper>
);

export const CollectionSmall: React.FC<{ icon: string; name: string }> = ({
  icon,
  name
}) => {
  return (
    <WrapperSmall py={1} mb={1} ml={3}>
      <Avatar size="m" variant="avatar" src={icon} />
      <Box>
        <TitleSmall variant="subhead" fontSize={1} my={3} fontWeight={600}>
          {name.length > 80 ? name.replace(/^(.{76}[^\s]*).*/, '$1...') : name}
        </TitleSmall>
      </Box>
    </WrapperSmall>
  );
};

const WrapperSmall = styled(Box)`
  cursor: pointer;
  position: relative;
  text-align: center;
  > div {
    margin: 0 auto;
  }
`;

const Actions = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0px;
`;
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
  border-bottom: 4px solid ${props => props.theme.colors.lighter};
  &:hover {
    border-radius: 4px;
    background: ${props => props.theme.colors.lighter};
  }
`;

const Infos = styled.div`
  flex: 1;
  margin-left: 8px;
  position: relative;
`;
const Title = styled(Heading)`
  color: ${props => props.theme.colors.darkgray};
  font-size: 20px;
`;

const TitleSmall = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
  text-align: center;
`;

export default Component;
