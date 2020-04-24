import useAxios from 'axios-hooks';
import Markdown from 'markdown-to-jsx';
import { terms_markdown_text, terms_markdown_urls } from 'mn-constants';
import * as React from 'react';
import { Eye } from 'react-feather';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { Panel } from 'ui/elements/Panel';
import styled from '../../themes/styled';
import LogoContainer from 'ui/elements/Logo';

export interface Props {}

const TermsAndConditionsPage: React.FC<Props> = ({}) => {
  var terms_users_text = { data: terms_markdown_text.terms_users };
  var terms_cookies_text = { data: terms_markdown_text.terms_cookies };
  var terms_indexing_text = { data: terms_markdown_text.terms_indexing };

  if (terms_markdown_urls.enabled) {
    var [terms_users] = useAxios(terms_markdown_urls.terms_users, {
      useCache: true
    });
    var [terms_cookies] = useAxios(terms_markdown_urls.terms_cookies, {
      useCache: true
    });
    var [terms_indexing] = useAxios(terms_markdown_urls.terms_indexing, {
      useCache: true
    });
  }

  return (
    <Container>
      <LoginWrapper>
        <LogoContainer />
        <Flex mt={2}>
          <Right>
            {terms_markdown_urls.enabled && (
              <>
                <Aware green mb={3} mt={3} p={3}>
                  <Box mr={2}>
                    <Eye size="20" color="white" />
                  </Box>
                  <Text variant="suptitle">
                    {' '}
                    Please read the following. By signing up your are consenting
                    to these agreements.
                  </Text>
                </Aware>
                <Panel className="extra">
                  <Box p={3}>
                    <Markdown>
                      {terms_users.data || terms_users_text.data}
                    </Markdown>
                  </Box>
                  <Box p={3}>
                    <Markdown>
                      {terms_cookies.data || terms_cookies_text.data}
                    </Markdown>
                  </Box>
                  <Box p={3}>
                    <Markdown>
                      {terms_indexing.data || terms_indexing_text.data}
                    </Markdown>
                  </Box>
                </Panel>
              </>
            )}
          </Right>
        </Flex>
      </LoginWrapper>
      {/* )} */}
    </Container>
  );
};
export default TermsAndConditionsPage;

const LoginWrapper = styled(Box)`
  ${media.lessThan('medium')`
    // display: grid;
    // grid-template-columns: 1fr;
    padding: 16px
  `};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1020px;
`;

const Right = styled(Box)`
  .extra {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;
const Aware = styled(Flex)<{ green: boolean }>`
  background: ${props => (props.green ? '#546d4f' : props.theme.colors.orange)};
  border-radius: 4px;
  align-items: center;
  div {
    color: white;
  }
`;
