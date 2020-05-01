import useAxios from 'axios-hooks';
import Markdown from 'markdown-to-jsx';
import {
  INSTANCE_TAGLINE,
  logo_large_url,
  related_urls,
  terms_markdown_text,
  terms_markdown_urls
} from 'mn-constants';
import { clearFix } from 'polished';
import * as React from 'react';
import { Eye } from 'react-feather';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { Panel, WrapperPanel } from 'ui/elements/Panel';
import styled from '../../themes/styled';

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
        <Header>
          <Logo />
          <Tagline>{INSTANCE_TAGLINE}</Tagline>
        </Header>
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
                <WrapperPanel className="extra">
                  <Panel>
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
                </WrapperPanel>
              </>
            )}
          </Right>
        </Flex>
        <Footer>
          <ul>
            <li>
              <a href={related_urls.project_homepage} target="blank">
                About
              </a>
            </li>
            <li>
              <a href={related_urls.terms_users} target="blank">
                Code of Conduct
              </a>
            </li>
            <li>
              <a href={related_urls.code} target="blank">
                Open source
              </a>
            </li>
            <li>
              <a href={related_urls.feedback} target="blank">
                Feedback
              </a>
            </li>
            <li>
              <a href={related_urls.terms_cookies} target="blank">
                Privacy notice
              </a>
            </li>
          </ul>
        </Footer>
      </LoginWrapper>
      {/* )} */}
    </Container>
  );
};
export default TermsAndConditionsPage;

const Tagline = styled.h5`
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 40px;
  color: #000000a1;
  font-weight: 500;
`;

const Logo = styled.div`
  background: url(${logo_large_url});
  width: 300px;
  display: inline-block;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LoginWrapper = styled(Box)`
  ${media.lessThan('medium')`
    display: grid;
    grid-template-columns: 1fr;
    padding: 16px
  `};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1020px;
`;

const Header = styled.div`
  grid-area: header;
  text-align: center;
`;

// const FormWrapper = styled(Box)`
//   margin: 0;
//   flex: 1;
//   input {
//     height: 50px;
//     color: inherit;
//     background-color: transparent;
//     border-radius: 4px;
//     border: 1px solid #dadada;
//   }
//   background: #fff;
//   border-radius: 4px;
//   height: inherit;
//   border: 1px solid #dddfe2;
//   text-align: left;
//   height: fit-content;
//   padding: 16px;
// `;

const Right = styled(Box)`
  .extra {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;

const Footer = styled(Box)`
  border-top: ${props => props.theme.colors.border};
  padding-top: 24px;
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 1;
    ${clearFix()}
    & li {
      float: left;
      margin-right: 16px;
      font-size: 13px;
      & a {
        color: rgba(0, 0, 0, 0.45);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Aware = styled(Flex)<{ green: boolean }>`
  background: ${props =>
    props.green ? '#546d4f' : props.theme.colors.primary};
  border-radius: 4px;
  align-items: center;
  div {
    color: white;
  }
`;
