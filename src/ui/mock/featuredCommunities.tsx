import { FeaturedCommunitiesData as FeaturedCommunitiesProps } from 'ui/modules/FeaturedCommunities';

export const getFeaturedCommunitiesProps = (
  isAdmin = false
): FeaturedCommunitiesProps => {
  return {
    isAdmin,
    featuredCommunities: [
      {
        id: '1',
        name: 'Instructional Design in HE',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '2',
        name: 'The Lounge',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '3',
        name: 'OER Lounge',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '4',
        name: 'Favourite books',
        icon: 'https://picsum.photos/id/200/200/200'
      }
    ]
  };
};
