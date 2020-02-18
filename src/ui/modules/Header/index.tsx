import React from 'react';
import styled from 'ui/themes/styled';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ChevronLeft } from 'react-feather';
import { Flex, Text } from 'rebass/styled-components';
// import Avatar from 'ui/elements/Avatar';

export const Header: React.FC<{ name: string }> = ({ name }) => {
  const history = useHistory();
  return (
    <HeaderWrapper>
      <Left onClick={() => history.goBack()}>
        <ChevronLeft size="24" />
        <SupText ml={2} variant="suptitle">
          {name}
        </SupText>
      </Left>
      {/* <Right>
          <Link to={`/communities/${id}`}>
            <LinkImg>
              <Avatar size="s" src={icon} />
            </LinkImg>
          
          </Link>
        </Right> */}
    </HeaderWrapper>
  );
};

//   const LinkImg = styled(Box)`
//   margin-right: 8px;
//   .--rtl & {
//     margin-right: 0px;
//     margin-left: 8px;
//   }
// `;

//   const Right = styled(Flex)`
//   align-items: center;
//   a {
//     display: flex;
//     align-items: center;
//   }
// `;
const Left = styled(Flex)`
  flex: auto;
  align-items: center;
  svg {
    margin: 0;
  }
`;

const SupText = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
  text-transform: capitalize;
  font-size: 16px;
`;

const HeaderWrapper = styled(Flex)`
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
