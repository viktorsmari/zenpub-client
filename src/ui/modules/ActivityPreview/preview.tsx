import * as React from 'react';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { Heading, Text } from 'rebass/styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Context } from '.';

export enum ContextType {
  Comment,
  Resource,
  Collection,
  Community,
  Like,
  Follow,
  Flag
}

export enum ActivityVerb {
  Updated,
  Created,
  InReplyTo
}

interface Props {
  context: Context;
}

const Preview: React.FC<Props> = ({ context }) => {
  return (
    <Wrapper>
      {context.contextType === ContextType.Comment ? (
        <>
          <InReply m={2} mb={0} variant="text">
            In reply to{' '}
            <Link to={'/user/' + context.actor.id}>@{context.actor.name}</Link>
          </InReply>
          <WrapperLink to={context.url}>
            <Comment variant="text">{comment}</Comment>
          </WrapperLink>
        </>
      ) : type === 'Resource' ||
      type === 'Collection' ||
      type === 'Community' ? (
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
      ) : type === 'Comment' ? (
        <WrapperLink to={context.url}>
          <Comment variant="text">{comment}</Comment>
        </WrapperLink>
      ) : type === 'Flag' ? (
        <Text>This is a flag</Text>
      ) : type === 'Follow' ? (
        <Text>This is a follow</Text>
      ) : type === 'Like' ? (
        <Text>This is a Like</Text>
      ) : (
        <Text>This cannot happen</Text>
      )}
    </Wrapper>
  );
};

const InReply = styled(Text)`
  padding-bottom: 0;
  display: inline-block;
  font-weight: 500;
  font-size: 13px;
  color: ${props => props.theme.colors.gray};
  a {
    color: ${props => props.theme.colors.orange} !important;
    font-weight: 600;
  }
`;

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
  &.connector {
    background: ${props => props.theme.colors.lightgray};
  }
  &:hover {
    background: rgb(245, 248, 250);
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

export default Preview;
