import { Props as CollectionProps } from 'ui/modules/Previews/Collection';
import { Props as CommunityProps } from 'ui/modules/Previews/Community';
import { Props as ResourceProps } from 'ui/modules/Previews/Resource';
import { Props as UserProps } from 'ui/modules/Previews/User';
import { CommentProps } from 'ui/modules/Previews/Comment';
import { CommentProps as LikedCommentProps } from 'ui/modules/Previews/LikedComment';
import { CommentProps as MainCommentProps } from 'ui/modules/Previews/MainComment';
import { ToggleFormik } from './formik';
import { getActions } from './activityPreview';
import { FlaggedProps } from 'ui/modules/Previews/FlaggedItem';
import { CommentProps as ThreadProps } from 'ui/modules/Previews/Thread';

export function CollectionPreviewProps(
  username = 'Test collection',
  isFollowing = true,
  icon = 'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png',
  summary = 'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
): CollectionProps {
  return {
    link: { url: '/', external: true },
    displayUsername: username,
    isFollowing,
    icon,
    name: username,
    summary,
    totalResources: 12,
    toggleFollowFormik: ToggleFormik()
  };
}

export function CommunityPreviewProps(
  icon = 'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png',
  name = 'mantarai',
  displayUsername = '@community@moodle.net',
  summary = 'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
): CommunityProps {
  return {
    icon,
    name,
    link: { url: '/', external: true },
    displayUsername,
    summary,
    followersCount: 12,
    collectionsCount: 6,
    joined: true,
    toggleJoinFormik: ToggleFormik(),
    threadsCount: 3
  };
}

export function ResourcePreviewProps(
  icon = 'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png',
  license = null,
  type = 'image',
  isLocal = true,
  name = 'mantarain',
  summary = 'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
): ResourceProps {
  return {
    icon,
    isLocal,
    license,
    acceptedLicenses: ['license 1', 'license 2', 'license 3'],
    name,
    like: {
      toggleLikeFormik: ToggleFormik(),
      iLikeIt: true,
      totalLikes: 5
    },
    summary,
    link: 'https://www.pinterest.it/topics/anime/',
    type,
    isFlagged: false,
    FlagModal: ({ done }) => {
      return <></>;
    }
  };
}

export function UserPreviewProps(
  image = 'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
  bio = `I'm a cool user`,
  username = '@favbooks@abc.com',
  name = '˗ˏˋ Doug Belshaw ˎˊ˗ ',
  isFollowing = true
): UserProps {
  return {
    image,
    bio,
    username,
    name,
    isFollowing,
    toggleFollowFormik: ToggleFormik()
  };
}

export function CommentPreviewProps(
  url = '/',
  content = 'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here ',
  isFlagged = false
): CommentProps {
  return {
    ...getActions(),
    url,
    content,
    isFlagged
  };
}

export function LikedCommentPreviewProps(
  createdAt = '2018-11-11',
  communityName = 'test',
  communityLink = '1',
  content = 'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
): LikedCommentProps {
  return {
    ...getActions(),
    actor: {
      icon:
        'https://pbs.twimg.com/profile_images/1161428802091802627/O49Ggs-7_400x400.jpg',
      link: '1',
      name: '˗ˏˋ Doug Belshaw ˎˊ˗ '
    },
    createdAt,
    communityName,
    communityLink,
    content
  };
}

export function MainCommentPreviewProps(
  content = 'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
): MainCommentProps {
  return {
    ...getActions(),
    content
  };
}

export function ThreadPreviewProps(
  content = 'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here '
): ThreadProps {
  return {
    link: '/',
    // title:"What do the avatars in the topic list mean?",
    content:
      'After longtime I made a design for Uplabs Music player design challenge. i hope you all like this. if you like my design dont forgot to Vote in Uplabs ( 25 June ). Vote Here ',
    createdAt: '2019-11-09',
    totalReplies: '24',
    totalLikes: '17',
    members: [
      'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png',
      'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png',
      'https://files.mastodon.social/accounts/headers/001/105/637/original/6da7b224d62ebeb5.png'
    ]
  };
}

export function FlaggedItemPreviewProps(
  context,
  type,
  reason = 'Abusive speech'
): FlaggedProps {
  return {
    type,
    reason,
    flaggedItemContext: context
  };
}
