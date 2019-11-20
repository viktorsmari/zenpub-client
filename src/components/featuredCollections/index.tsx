import React from 'react';
import { compose } from 'recompose';
import { graphql, QueryControls, OperationOption } from 'react-apollo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const getFollowedCollections = require('../../graphql/getFeaturedCollections.graphql');
import Loader from '../../components/elements/Loader/Loader';
import { Trans } from '@lingui/macro';
import CollectionSmall from '../elements/Collection/CollectionSmall';
import { ChevronLeft, Right } from '../elements/Icons';
import { Title, RightContext } from '../featuredCommunities';
import { IS_DEV } from '../../constants';

interface Data extends QueryControls {
  one: any;
  two: any;
  three: any;
  four: any;
  five: any;
  six: any;
  seven: any;
}

interface Props {
  data: Data;
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
        {this.props.data.error ? (
          <span>
            <Trans>{/* Error loading featured collections */}</Trans>
          </span>
        ) : this.props.data.loading ? (
          <Loader />
        ) : (
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.data.one ? (
              <CollectionSmall collection={this.props.data.one} />
            ) : null}
            {this.props.data.two ? (
              <CollectionSmall collection={this.props.data.two} />
            ) : null}
            {this.props.data.three ? (
              <CollectionSmall collection={this.props.data.three} />
            ) : null}
            {this.props.data.four ? (
              <CollectionSmall collection={this.props.data.four} />
            ) : null}
            {this.props.data.five ? (
              <CollectionSmall collection={this.props.data.five} />
            ) : null}
            {this.props.data.six ? (
              <CollectionSmall collection={this.props.data.six} />
            ) : null}
            {this.props.data.seven ? (
              <CollectionSmall collection={this.props.data.seven} />
            ) : null}
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
>(getFollowedCollections, {
  options: {
    variables: {
      one: IS_DEV
        ? '2457bae9-9c16-4783-8089-07c9a8ef46b3'
        : '2457bae9-9c16-4783-8089-07c9a8ef46b3',
      two: IS_DEV
        ? 'c9385ae4-4227-4885-ab44-c51301df9518'
        : 'c9385ae4-4227-4885-ab44-c51301df9518',
      three: IS_DEV
        ? '4d5b465c-6a7e-49f9-ac10-e1a5e4a6a438'
        : '4d5b465c-6a7e-49f9-ac10-e1a5e4a6a438',
      four: IS_DEV
        ? 'ac253480-8c42-43e0-aeb2-611e29dbf77c'
        : 'ac253480-8c42-43e0-aeb2-611e29dbf77c',
      five: IS_DEV
        ? '2457bae9-9c16-4783-8089-07c9a8ef46b3'
        : '2457bae9-9c16-4783-8089-07c9a8ef46b3',
      six: IS_DEV
        ? 'c9385ae4-4227-4885-ab44-c51301df9518'
        : 'c9385ae4-4227-4885-ab44-c51301df9518',
      seven: IS_DEV
        ? '54500246-f87e-4022-a1eb-313f385bd83c'
        : '54500246-f87e-4022-a1eb-313f385bd83c'
    }
  }
}) as OperationOption<{}, {}>;

export default compose(withGetInbox)(MultipleItems);
