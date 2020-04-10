import {
  Loaded as HeroUserProps,
  Status as HeroUserStatus
} from 'ui/modules/HeroUser';

export const getHeroUserProps = (
  name = '˗ˏˋ Doug Belshaw ˎˊ˗  🇪🇺 ☠️ ✊',
  displayUsername = 'dajbelshaw@team.moodle.net',
  image = 'https://pbs.twimg.com/profile_banners/764365/1574452341/1500x500',
  icon = 'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
  me = false,
  location = 'Morpeth, UK',
  summary = 'Open Educational Thinkerer. Product Manager @MoodleNet & Co-op founder @WeAreOpenCoop. Aspiring Mountain Leader. Previously: @Mozilla @Jisc teacher'
): HeroUserProps => {
  return {
    me,
    status: HeroUserStatus.Loaded,
    image,
    displayUsername,
    location,
    icon,
    name,
    summary,
    isFlagged: false,
    FlagModal: ({ done }) => {
      return <></>;
    }
  };
};
