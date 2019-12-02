import * as React from 'react';
import styled from '../../themes/styled';
import { Flex, Text, Image } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { useHistory } from 'react-router';
import { LocaleContext } from '../../containers/App/App';
import Link from '../../components/elements/Link/Link';
import { Community, Collection, Resource } from '../../graphql/types.generated';

const Img = styled(Image)`
  max-width: 30px;
  height: 30px;
  border-radius: 3px;
`;
const Right = styled(Flex)`
  align-items: center;
  a {
    display: flex;
    align-items: center;
  }
`;
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
    <LocaleContext.Consumer>
      {value =>
        value.contentDirection == 'ltr' ? (
          <Header>
            <Left onClick={() => history.goBack()}>
              <ChevronLeft size="24" />
              <Text>
                <Trans>Back</Trans>
              </Text>
            </Left>
            <Right>
              <Link to={`/communities/${context.id}`}>
                <Img mr={2} src={context.icon} />
                <Text variant="suptitle">{context.name}</Text>
              </Link>
            </Right>
          </Header>
        ) : (
          <Header>
            <Left onClick={() => history.goBack()}>
              <ChevronRight size="24" />
              <Text>
                <Trans>Back</Trans>
              </Text>
            </Left>
            <Right>
              <Link to={`/communities/${context.id}`}>
                <Img ml={2} src={context.icon} />
                <Text variant="suptitle">{context.name}</Text>
              </Link>
            </Right>
          </Header>
        )
      }
    </LocaleContext.Consumer>
  );
};

export default HeaderWrapper;
