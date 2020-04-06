import React from 'react';
import styled from 'ui/themes/styled';
import { Flex, Text } from 'rebass/styled-components';

export const SuperTab: React.FC<{ name: string }> = ({ name }) => {
  return (
    // <SuperTabsWrapper>
    <Left>
      <SupText ml={2} variant="suptitle">
        {name}
      </SupText>
    </Left>
    // </SuperTabsWrapper>
  );
};

const Left = styled(Flex)`
  flex: auto;
  align-items: center;
`;

const SupText = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
  text-transform: capitalize;
  font-size: 16px;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;

// const SuperTabsWrapper = styled(Flex)`
//   border-bottom: 1px solid ${props => props.theme.colors.lightgray};
//   height: 40px;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 8px;
// //   background: #fff;
// //   border-top-left-radius: 6px;
// //   border-top-right-radius: 6px;
//   a {
//     display: flex;
//     flex: 1;
//     text-decoration: none;
//   }

// `;
