import {
  Props as HeroCollectionProps,
  Status as HeroCollectionStatus
} from 'ui/modules/HeroCollection';
import { ToggleFormik } from './formik';

export const getHeroCollectionProps = (
  isAdmin = false,
  following = true,
  icon = 'https://picsum.photos/800/300',
  name = 'Favourite books',
  fullName = 'favbooks@abc.com',
  communityIcon = 'https://picsum.photos/800/300',
  communityName = 'Super community',
  summary = 'Cooperation combined with network effects is more effective than capitalist competition'
): HeroCollectionProps => {
  return {
    collection: {
      status: HeroCollectionStatus.Loaded,
      isAdmin,
      canModify: true,
      following,
      basePath: '/',
      isFlagged: false,
      icon,
      name,
      fullName,
      communityIcon,
      communityId: '2',
      communityName,
      summary,
      followerCount: 10,
      // contributorCount: 2,
      toggleJoinFormik: ToggleFormik(),
      EditCollectionPanel: ({ done }) => <></>,
      FlagModal: ({ done }) => <></>,
      FeaturedModal: () => <></>
    }
  };
};
