import { Trans } from '@lingui/macro';
import { FetchResult } from 'apollo-link';
import { GetFeaturedCommunitiesQueryResult } from 'graphql/generated/getFeaturedCommunities.generated';
import React from 'react';
import { graphql, OperationOption } from 'react-apollo';
import Slider from 'react-slick';
import { compose } from 'recompose';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { LocaleContext } from '../../context/global/localizationCtx';
import styled from '../../themes/styled';
import CommunitySmall from '../elements/Community/CommunitySmall';
import { ChevronLeft, Right } from '../elements/Icons';
import Loader from '../elements/Loader/Loader';
const getFeaturedCommunities = require('../../graphql/getFeaturedCommunities.graphql');

export const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  margin: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.darkgray};
  & h5 {
    margin: 0;
    color: ${props => props.theme.colors.darkgray};
    display: inline-block;
    padding: 0;
    font-size: 12px;
    text-transform: uppercase;
    height: 30px;
    font-weight: 500;
    line-height: 30px;
  }
`;

export const RightContext = styled.div`
  & span {
    cursor: pointer;
    display: inline-block;
    height: 30px;
    & svg {
      color: ${props => props.theme.colors.darkgray} !important;
      vertical-align: middle;
      height: 30px;
    }
    &:hover {
      & svg {
        color: ${props => props.theme.colors.darkgray} !important;
      }
    }
  }
  float: right;

  .--rtl & {
    flex-direction: row-reverse;
    float: left;
  }
`;

interface Props {
  data: FetchResult<GetFeaturedCommunitiesQueryResult>['data'];
}
class MultipleItems extends React.Component<Props> {
  private slider: any;

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider && this.slider.slickNext();
  }
  previous() {
    this.slider && this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <Title>
          <h5>
            <Trans>Featured communities</Trans>{' '}
          </h5>
          <LocaleContext.Consumer>
            {value =>
              value.locale != 'ar_SA' ? (
                <RightContext>
                  <span onClick={this.previous}>
                    <ChevronLeft
                      width={26}
                      height={26}
                      strokeWidth={1}
                      color={'#333'}
                    />
                  </span>
                  <span onClick={this.next}>
                    <Right
                      width={26}
                      height={26}
                      strokeWidth={1}
                      color={'#333'}
                    />
                  </span>
                </RightContext>
              ) : (
                <RightContext>
                  <span onClick={this.next}>
                    <Right
                      width={26}
                      height={26}
                      strokeWidth={1}
                      color={'#333'}
                    />
                  </span>
                  <span onClick={this.previous}>
                    <ChevronLeft
                      width={26}
                      height={26}
                      strokeWidth={1}
                      color={'#333'}
                    />
                  </span>
                </RightContext>
              )
            }
          </LocaleContext.Consumer>
        </Title>
        {!this.props.data || !this.props.data.data || this.props.data.error ? (
          <span>
            <Trans>{/* Error loading featured communities */}</Trans>
          </span>
        ) : this.props.data.loading ? (
          <Loader />
        ) : (
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.data.data.instance
              ? this.props.data.data.instance.featuredCommunities.edges.map(
                  edge =>
                    edge &&
                    edge.node.context.__typename === 'Community' && (
                      <CommunitySmall community={edge.node.context} />
                    )
                )
              : null}
          </Slider>
        )}
      </>
    );
  }
}

const withGetInbox = graphql<
  {},
  {
    data: any;
  }
>(getFeaturedCommunities, {
  options: {
    variables: {}
  }
}) as OperationOption<{}, {}>;

export default compose(withGetInbox)(MultipleItems);
