import OutsideClickHandler from 'react-outside-click-handler';
import React, { SFC } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
// import {  Flag, Upload, Copy } from 'react-feather';

interface Props {
  cb: any;
}
export const Dropdown: SFC<Props> = ({ cb, children }) => (
  <OutsideClickHandler onOutsideClick={() => cb(false)}>
    <Wrapper>{children}</Wrapper>
  </OutsideClickHandler>
);

const Wrapper = styled(Box)`
  text-align: left;
  background: white;
  width: 160px;
  display: block;
  border-radius: 6px;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px,
    rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
  position: absolute;
  top: 8px;
  right: 0px;
  z-index: 9999999999999999999999999999;
`;
export const DropdownItem = styled(Flex)`
  align-items: center;
  cursor: pointer;
  padding: 16px;
  &:first-of-type {
    border-top-radius: 6px;
  }
  &:hover {
    background: ${props => props.theme.colors.lighter};
  }
`;
