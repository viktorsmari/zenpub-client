import styled from '../themes/styled';
import { Flex } from 'rebass/styled-components';
import media from 'styled-media-query';

export const HomeBox = styled(Flex)`
  max-width: 600px;
  width: 100%;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
`;

export const MainContainer = styled(Flex)`
  align-items: stretch;
  justify-content: space-between;
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
`;

export const MainWrapper = styled(Flex)`
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
  border-left: 1px solid ${props => props.theme.colors.lightgray};
  margin-left: 0px;
  ${media.lessThan('medium')`
  width: 100%;
`};
`;

export const WrapperDimension = styled(Flex)`
  align-items: stretch;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  flex-direction: column;
  width: 990px;
  ${media.lessThan('1095px')`
  width: 920px;
`};
  ${media.lessThan('1005px')`
  width: 600px;
`};
  ${media.lessThan('medium')`
  width: 100%;
`};
`;

export const Inner = styled(Flex)`
  flex-grow: 1;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100%;
  width: 100%;
  flex-direction: row;
`;
