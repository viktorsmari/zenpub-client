import {
  Props as HeroCommunityProps,
  Status as HeroCommunityStatus
} from 'ui/modules/HeroCommunity';
import { ToggleFormik } from './formik';

export const getHeroCommunityProps = (
  isAdmin = false,
  following = true,
  icon = 'https://picsum.photos/800/300',
  name = 'Favourite books',
  fullName = 'favbooks@abc.com',
  summary = 'Cooperation combined with network effects is more effective than capitalist competition'
): HeroCommunityProps => {
  return {
    community: {
      isAdmin,
      // isFeatured: false,
      basePath: '/',
      status: HeroCommunityStatus.Loaded,
      canModify: true,
      following,
      isFlagged: false,
      icon,
      name,
      fullName,
      summary,
      totalMembers: 193,
      toggleJoinFormik: ToggleFormik(),
      EditCommunityPanel: ({ done }) => <></>,
      FlagModal: ({ done }) => <></>,
      FeaturedModal: () => <></>
    }
  };
};
