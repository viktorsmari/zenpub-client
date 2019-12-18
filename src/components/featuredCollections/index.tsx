import { Trans } from '@lingui/macro';
import { FetchResult } from 'apollo-link';
import { GetFeaturedCollectionsQueryResult } from 'graphql/generated/getFeaturedCollections.generated';
import React from 'react';
import { graphql, OperationOption } from 'react-apollo';
import Slider from 'react-slick';
import { compose } from 'recompose';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { GRAPHQL_ENDPOINT } from '../../constants';
import CollectionSmall from '../elements/Collection/CollectionSmall';
import { ChevronLeft, Right } from '../elements/Icons';
import Loader from '../elements/Loader/Loader';
import { RightContext, Title } from '../featuredCommunities';
const getFeaturedCollections = require('../../graphql/getFeaturedCollections.graphql');

interface Props {
  data: FetchResult<GetFeaturedCollectionsQueryResult>['data'];
}

class MultipleItems extends React.Component<Props> {
  private slider: any;

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
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
            <Trans>Featured collections</Trans>{' '}
          </h5>
          <RightContext>
            <span onClick={this.previous}>
              <ChevronLeft
                width={26}
                height={26}
                strokeWidth={1}
                color={'inherit'}
              />
            </span>
            <span onClick={this.next}>
              <Right width={26} height={26} strokeWidth={1} color={'inherit'} />
            </span>
          </RightContext>
        </Title>
        {!this.props.data || !this.props.data.data || this.props.data.error ? (
          <span>
            <Trans>{/* Error loading featured collections */}</Trans>
          </span>
        ) : this.props.data.loading ? (
          <Loader />
        ) : (
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.data.data.instance
              ? this.props.data.data.instance.featuredCollections.edges.map(
                  edge =>
                    edge &&
                    edge.node.context.__typename === 'Collection' && (
                      <CollectionSmall collection={edge.node.context} />
                    )
                )
              : null}
          </Slider>
        )}
      </>
    );
  }
}

const is_home =
  GRAPHQL_ENDPOINT == 'https://home.moodle.net/api/graphql' ? true : false;

const withGetInbox = graphql<
  {},
  {
    data: any;
  }
>(getFeaturedCollections, {
  options: {
    variables: {
      one: is_home ? 'cd514675-e822-4041-84e8-a5493e57d7d1' : null,
      two: is_home ? '0e745426-995f-4755-80a0-59df867fd6ab' : null
      // three: IS_DEV ? '5487' : '5571',
      // four: IS_DEV ? '8092' : '5487',
      // five: IS_DEV ? '690' : '4944',
      // six: IS_DEV ? '3790' : '2374',
      // seven: IS_DEV ? '4848' : '5571'
    }
  }
}) as OperationOption<{}, {}>;

export default compose(withGetInbox)(MultipleItems);
