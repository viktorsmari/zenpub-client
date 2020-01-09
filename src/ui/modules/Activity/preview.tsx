import * as React from 'react';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { Heading, Text } from 'rebass/styled-components';
import { NavLink } from 'react-router-dom';

interface Props {
  context: {
    icon: string;
    title: string;
    summary: string;
    url: string;
  };
  type: string;
  comment: string;
}

const Preview: React.FC<Props> = ({ context, type, comment }) => {
  return (
    <Wrapper>
      {type === 'InReplyTo' ? (
        <>
          <WrapperLink to={context.url}>
            <Img style={{ backgroundImage: `url(${context.icon})` }} />
            <Info>
              <TitleWrapper>
                <Title>{context.title}</Title>
              </TitleWrapper>
              <Text variant="text" mt={2}>
                {(context.summary || '').split('\n').map(function(item, key) {
                  return (
                    <span key={key}>
                      {item}
                      <br />
                    </span>
                  );
                })}
              </Text>
            </Info>
          </WrapperLink>
          <WrapperLink to={context.url}>
            <Comment ml={2} variant="text">
              {comment}
            </Comment>
          </WrapperLink>
        </>
      ) : type !== 'Comment' ? (
        <WrapperLink to={context.url}>
          <Img style={{ backgroundImage: `url(${context.icon})` }} />
          <Info>
            <TitleWrapper>
              <Title>{context.title}</Title>
            </TitleWrapper>
            <Text variant="text" mt={2}>
              {(context.summary || '').split('\n').map(function(item, key) {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </Text>
          </Info>
        </WrapperLink>
      ) : (
        <WrapperLink to={context.url}>
          <Comment variant="text">{comment}</Comment>
        </WrapperLink>
      )}
    </Wrapper>
  );
};

const Comment = styled(Text)`
  & a {
    color: ${props => props.theme.colors.darkgray} !important;
    font-weight: 400 !important;
    font-size: 14px;
    text-decoration: none;
    line-height: 20px;
  }
`;

const WrapperLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  position: relative;
  z-index: 999999;
  padding: 8px;
  // margin-bottom: 8px;
  // border-radius: 4px;
  // border: 1px solid ${props => props.theme.colors.lightgray};
  &:hover {
    background: ${props => props.theme.colors.lightgray};
    text-decoration: none !important;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  & a {
    flex: 1;
  }
`;
const Info = styled.div`
  flex: 1;
  margin-left: 8px;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  margin-bottom: 8px;
  ${media.lessThan('medium')`
  display: block;
  padding: 0;
  padding: 20px;
  a {
    
    }
  }
  `};
`;

const Img = styled.div`
  background-size: cover;
  background-repeat: none;
  height: 120px;
  width: 120px;
  margin: 0 auto;
  background-position: center center;
  margin-right: 8px;
  ${media.lessThan('medium')`
    margin: 0 auto;
    margin-bottom: 8px;
    margin-top: 8px;
  `};
`;
const Title = styled(Heading)`
  margin: 0 !important;
  font-size: 16px !important;
  line-height: 22px !important;
  margin-top: 8px;
  flex: 1;
  color: ${props => props.theme.colors.darkgray};
  ${media.lessThan('medium')`
  line-height: 20px !important;
`};
`;
// const Summary = styled(Text)`
//   margin: 0 !important;
//   margin-top: 4px;
//   color: ${props => props.theme.colors.darkgray}
//   font-size: 13px;
//   line-height: 18px;
// `;

export default Preview;
