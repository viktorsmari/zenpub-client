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
import styled from '../../../themes/styled';
import { Heading, Text } from 'rebass/styled-components';
import { NavLink } from 'react-router-dom';
const PlaceholderImg = require('../Icons/resourcePlaceholder.png');

interface Props {
  icon: string;
  title: string;
  summary: string;
  url: string;
}

const Resource: React.FC<Props> = props => {
  return (
    <Wrapper>
      <WrapperLink to={props.url}>
        <Img
          style={{ backgroundImage: `url(${props.icon || PlaceholderImg})` }}
        />
        <Info>
          <TitleWrapper>
            <Title>{props.title}</Title>
          </TitleWrapper>
          <Summary>
            {props.summary.split('\n').map(function(item, key) {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })}
          </Summary>
        </Info>
      </WrapperLink>
    </Wrapper>
  );
};

const WrapperLink = styled(NavLink)`
  display: flex;
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
  ${media.lessThan('medium')`
  margin-left: 0;
  `};
  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.div`
  &:hover {
    background: ${props => props.theme.colors.lightgray};
  }
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  margin-top: 8px;
  ${media.lessThan('medium')`
  display: block;
  padding: 0;
  padding: 20px;
  & a {
    text-decoration: none;
  }
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: 0px;
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
  margin-right: 20px;
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
  text-align: center;
  padding: 0 8px;
  line-height: 24px !important;
`};
`;
const Summary = styled(Text)`
  margin: 0 !important;
  margin-top: 4px;
  color: ${props => props.theme.colors.darkgray}
  font-size: 13px;
  line-height: 18px;
`;

export default Resource;
