import * as React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from '../../themes/styled';
import { Menu } from 'react-feather';
import { SearchBox } from 'react-instantsearch-dom';
import media from 'styled-media-query';

// import media from 'styled-media-query';

const HeaderWrapper = styled(Flex)`
  height: 60px;
  max-width: 600px;
  background: white;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.lighter};
  ${media.greaterThan('860px')`
  display: none;
  `};
`;

const Header = ({ onOpen }) => (
  <HeaderWrapper p={2}>
    <Box mr={2}>
      <Menu onClick={() => onOpen()} size="20" />
    </Box>
    <Box flex="1">
      <SearchBox />
    </Box>
  </HeaderWrapper>
);

export default Header;
