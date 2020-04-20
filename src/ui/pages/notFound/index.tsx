import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Heading } from 'rebass/styled-components';
import styled from 'ui/themes/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NotFound = () => {
  return (
    <Wrapper>
      <Heading>
        <Trans>Page not found</Trans>
      </Heading>
    </Wrapper>
  );
};
