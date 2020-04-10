import {
  LoadedMe as HeroUserProps,
  Status,
  LoadedOther
} from 'ui/modules/HeroUser';
import { ToggleFormik } from './formik';

export const getHeroUserProps = (
  me = false,
  name = '˗ˏˋ Doug Belshaw ˎˊ˗  🇪🇺 ☠️ ✊',
  displayUsername = 'dajbelshaw@team.moodle.net',
  image = 'https://pbs.twimg.com/profile_banners/764365/1574452341/1500x500',
  icon = 'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
  location = 'Morpeth, UK',
  summary = 'Open Educational Thinkerer. Product Manager @MoodleNet & Co-op founder @WeAreOpenCoop. Aspiring Mountain Leader. Previously: @Mozilla @Jisc teacher'
) => {
  if (me) {
    const props: HeroUserProps = {
      name,
      status: Status.Loaded,
      displayUsername,
      image,
      icon,
      me: true,
      isFlagged: false,
      FlagModal: ({ done }) => {
        return <></>;
      },
      isAdmin: false,
      location,
      summary
    };

    return props;
  } else {
    const props: LoadedOther = {
      me: false,
      status: Status.Loaded,
      following: false,
      name,
      displayUsername,
      image,
      icon,
      isFlagged: false,
      FlagModal: ({ done }) => {
        return <></>;
      },
      isOpenDropdown: false,
      setOpenDropdown: () => console.log('test'),
      toggleFollowFormik: ToggleFormik(),
      location,
      summary
    };

    return props;
  }
};
