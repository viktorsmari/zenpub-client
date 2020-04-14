import OutsideClickHandler from 'react-outside-click-handler';
import React, { FC } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
// import {  Flag, Upload, Copy } from 'react-feather';

interface Props {
  cb(open: boolean): unknown;
  orientation: string[];
}
export const Dropdown: FC<Props> = ({ orientation, cb, children }) => (
  <OutsideClickHandler onOutsideClick={() => cb(false)}>
    <Wrapper orientation={orientation}>{children}</Wrapper>
  </OutsideClickHandler>
);

const Wrapper = styled(Box)<{ orientation: string[] }>`
  text-align: left;
  background: white;
  min-width: 200px;
  display: block;
  border-radius: 6px;
  box-shadow: rgba(101, 119, 134, 0.2) 0px 0px 15px,
    rgba(101, 119, 134, 0.15) 0px 0px 3px 1px;
  position: absolute;
  top: ${props => (props.orientation[0] === 'top' ? '45px' : 'auto')};

  bottom: ${props => (props.orientation[0] === 'bottom' ? '4px' : 'auto')};

  left: ${props => (props.orientation[1] === 'left' ? '0px' : 'auto')};
  right: ${props => (props.orientation[1] === 'right' ? '0px' : 'auto')};

  z-index: 9999999999999999999999999999;
`;
export const DropdownItem = styled(Flex)`
  align-items: center;
  cursor: pointer;
  padding: 16px;
  min-width: 100%;
  width: max-content;
  flex: 1;
  &:first-of-type {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  &:hover {
    div {
      color: ${props => props.theme.colors.darkgray} !important;
    }
    background: ${props => props.theme.colors.lighter} !important;
  }
`;
