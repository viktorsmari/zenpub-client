import { FeaturedCollectionsData as FeaturedCollectionsProps } from 'ui/modules/FeaturedCollections';

export const getFeaturedCollectionsProps = (
  isAdmin = false
): FeaturedCollectionsProps => {
  return {
    isAdmin,
    FeaturedModal: () => <div>FeaturedModal</div>,
    featuredCollections: [
      {
        id: '1',
        name: 'Global OER Projects',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '2',
        name: 'Great education-related books',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '3',
        name: 'Spaced Repetition',
        icon: 'https://picsum.photos/id/200/200/200'
      },
      {
        id: '4',
        name: 'Community OER',
        icon: 'https://picsum.photos/id/200/200/200'
      }
    ]
  };
};
