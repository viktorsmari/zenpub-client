import * as React from 'react';
import styled from '../../themes/styled';
import { Flex, Box, Text, Image } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import { ChevronLeft } from 'react-feather';
import { useHistory } from 'react-router';
import Link from '../../components/elements/Link/Link';
import { Community, Collection, Resource } from '../../graphql/types';

const Right = styled(Box)``;
const Left = styled(Flex)`
  flex: auto;
`;

const Header = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  height: 50px;
  align-items: center;
  align-content: space-between;
  padding: 0 8px;
  cursor: pointer;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;
export interface Props {
  context: Pick<Community | Collection | Resource, 'id' | 'name' | 'icon'>;
}
const HeaderWrapper: React.FC<Props> = ({ context }) => {
  const history = useHistory();
  return (
    <Header>
      <Left onClick={() => history.goBack()}>
        <ChevronLeft size="24" />
        <Text>
          <Trans>Back</Trans>
        </Text>
      </Left>
      <Right>
        <Link to={`/communities/${context.id}`}>
          <Image src={context.icon} />
          <Text variant="suptitle">{context.name}</Text>
        </Link>
      </Right>
    </Header>
  );
};

export default HeaderWrapper;
