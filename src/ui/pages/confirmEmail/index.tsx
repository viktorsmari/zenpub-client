import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import styled from '../../themes/styled';
import { logo_large_url } from 'mn-constants';

const LoginWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr;
  grid-template-areas: 'form';
`;

const Container = styled.div`
  margin: 0 auto;
  width: 432px;
  margin-top: 60px;
  padding: 16px;
  & button {
    margin-top: 16px;
    width: 100%;
    color: #fff !important;
    text-transform: uppercase
      &:hover {
      background: #d67218 !important;
    }
  }
`;

const Logo = styled.div`
  background: url(${logo_large_url});
  width: 300px;
  display: block;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FormWrapper = styled(Box)``;

export interface Props {
  result:
    | null
    | {
        error: null;
        username: string;
      }
    | {
        error: string;
      };
}

/**
 * @param Component
 * @param data {Object} the user object from local cache
 * @param rest
 * @constructor
 */

const ConfirmEmail: React.FC<Props> = ({ result }) => {
  return (
    <Container>
      <LoginWrapper>
        <FormWrapper>
          <Logo />
          <Box sx={{ textAlign: 'center' }}>
            {!result ? (
              <Text variant="text">Checking ...</Text>
            ) : result.error === null ? (
              <Text variant="text">
                Email confirmed, Welcome: {result.username}
              </Text>
            ) : (
              <Text variant="text">
                Error in email confirmation: {result.error}
              </Text>
            )}
          </Box>
        </FormWrapper>
      </LoginWrapper>
    </Container>
  );
};

export default ConfirmEmail;
