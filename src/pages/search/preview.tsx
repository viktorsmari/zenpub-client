/**
 * The only true button.
 *
 * @visibleName The Best Button Ever 🐙
 * Avatar component.
 * @param children {JSX.Element} children of Avatar
 * @param size {"small"|"large"} size of avatar
 * @param marked {Boolean} whether blue dot should appear on avatar
 * @param className {String} additional class names of avatar
 * @param props {Object} avatar props

 */

import * as React from 'react';
import media from 'styled-media-query';
import styled from '../../themes/styled';
import { Heading, Text, Button } from 'rebass/styled-components';
// import { NavLink } from 'react-router-dom';
import { Trans } from '@lingui/macro';

const PlaceholderImg = require('../../components/elements/Icons/resourcePlaceholder.png');

interface Props {
  icon: string;
  image?: string;
  title: string;
  summary: string;
  url: string;
  type: string;
  coreIntegrationURL?: any;
}

const Resource: React.FC<Props> = props => {
  return (
    <Wrapper>
      <WrapperLink target="blank" href={props.url}>
        <Img
          style={{
            backgroundImage: `url(${props.icon ||
              props.image ||
              PlaceholderImg})`
          }}
        />
        <Info>
          <TitleWrapper>
            <Title>{props.title}</Title>
          </TitleWrapper>
          <Text variant="text" mt={2}>
            {(props.summary || '').split('\n').map(function(item, key) {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })}
          </Text>
          <Type variant="suptitle">{props.type}</Type>
          {!props.coreIntegrationURL ? null : (
            <Actions>
              <a href={props.coreIntegrationURL} target="_top">
                <Button variant="outline">
                  <Trans>To Moodle!</Trans>
                </Button>
              </a>
            </Actions>
          )}
        </Info>
      </WrapperLink>
    </Wrapper>
  );
};
const Type = styled(Text)`
  margin-top: 8px;
  background: ${props => props.theme.colors.lighter};
  display: inline-block;
  padding: 4px 16px;
  border-radius: 30px;
`;
const Actions = styled.div`
  width: 100px;
  text-align: right;
  & button {
    height: 25x;
    max-width: 80px;
    min-width: 80px;
    border-width: 1px !important;
    line-height: 25px;
    color: ${props => props.theme.colors.lightgray} svg {
      color: inherit !important;
    }
  }
`;

const WrapperLink = styled.a`
  display: flex;
  text-decoration: none;
  &:hover {
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
//   ${media.lessThan('medium')`
//   display: block;
//   padding: 0;
//   padding: 20px;
//   `};
`;

const Img = styled.div`
  background-size: cover;
  background-repeat: none;
  height: 60px;
  width: 60px;
  border-radius: 4px;
  margin: 0 auto;
  background-position: center center;
  margin-right: 8px;
//   ${media.lessThan('medium')`
//     margin: 0 auto;
//     margin-bottom: 8px;
//     margin-top: 8px;
//   `};
`;
const Title = styled(Heading)`
  margin: 0 !important;
  font-size: 16px !important;
  line-height: 22px !important;
  margin-top: 8px;
  flex: 1;
  color: ${props => props.theme.colors.darkgray};
//   ${media.lessThan('medium')`
//   text-align: center;
//   padding: 0 8px;
//   line-height: 24px !important;
// `};
`;
// const Summary = styled(Text)`
//   margin: 0 !important;
//   margin-top: 4px;
//   color: ${props => props.theme.colors.darkgray}
//   font-size: 13px;
//   line-height: 18px;
// `;

export default Resource;
