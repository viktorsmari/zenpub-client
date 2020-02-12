import React, { SFC } from 'react';
import { Box, Text, Flex } from 'rebass/styled-components';
import { MapPin, MoreVertical, Flag } from 'react-feather';
import styled from 'ui/themes/styled';
import media from 'styled-media-query';
import Button from 'ui/elements/Button';
import { Trans } from '@lingui/react';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import { Link } from 'react-router-dom';

export enum Status {
  Loading,
  Loaded
}

export interface Props {
  status: Status.Loaded;
  me: boolean;
  user: {
    image: string;
    icon: string;
    name: string;
    displayUsername: string;
    location: string;
    summary: string;
    isAdmin: boolean;
    following: boolean;
    toggleJoin: {
      toggle(): any;
      isSubmitting: boolean;
    };
  };
}

export const HeroUser: SFC<Props> = ({ user, status, me }) => {
  const [isOpenDropdown, setOpenDropdown] = React.useState(false);

  return (
    <ProfileBox p={1} mb={2}>
      <Hero>
        <HeroBg src={user.image || 'https://picsum.photos/id/1021/800/300'} />
        <FlexProfile>
          <WrapperHero>
            <Img
              style={{
                backgroundImage: `url(${user.icon})`
              }}
            />
          </WrapperHero>
          <HeroAction mr={2}>
            {me ? (
              <Button mr={2} variant={'outline'}>
                <Trans>Edit Profile</Trans>
              </Button>
            ) : (
              <>
                <Button
                  mr={2}
                  variant={user.following ? 'danger' : 'primary'}
                  isSubmitting={user.toggleJoin.isSubmitting}
                  isDisabled={user.toggleJoin.isSubmitting}
                  onClick={user.toggleJoin.toggle}
                >
                  {user.following ? (
                    <Trans>Unfollow</Trans>
                  ) : (
                    <Trans>Follow</Trans>
                  )}
                </Button>
                <More>
                  <MoreVertical
                    size={20}
                    onClick={() => setOpenDropdown(true)}
                  />
                  {isOpenDropdown && (
                    <Dropdown orientation={'bottom'} cb={setOpenDropdown}>
                      <DropdownItem>
                        <Flag size={20} color={'rgb(101, 119, 134)'} />
                        <Text sx={{ flex: 1 }} ml={2}>
                          Flag {user.displayUsername}
                        </Text>
                      </DropdownItem>
                    </Dropdown>
                  )}
                </More>
              </>
            )}
          </HeroAction>
        </FlexProfile>
        <HeroInfo ml={3}>
          <Text
            sx={{ fontSize: '18px' }}
            mt={2}
            variant="heading"
            fontWeight={'bold'}
          >
            {user.name}
          </Text>
          <Username mt={1} fontSize={2}>
            @{user.displayUsername}
            {user.isAdmin && <AdminBadge ml={2}>Admin</AdminBadge>}
          </Username>
          <Text variant="text" mt={2}>
            {user.summary}
          </Text>
          {user.location ? (
            <Location mt={2}>
              <span>
                <MapPin strokeWidth={1} size={20} />
              </span>
              {user.location}
            </Location>
          ) : null}
        </HeroInfo>
        <WrapperResume ml={3} my={2}>
          <Resume>
            <ResumeItem variant="text">
              Member of <Link to="/communities">12 Communities</Link>
            </ResumeItem>
            ,
            <ResumeItem variant="text" ml={1}>
              Follow <Link to="/collections">43 Collections</Link> and{' '}
              <Link to="/following">22 Users</Link>
            </ResumeItem>
          </Resume>
          <Resume mt={2}>
            <ResumeItem variant="text">
              Followed by <Link to="/communities">124k Users</Link>
            </ResumeItem>
          </Resume>
        </WrapperResume>
      </Hero>
    </ProfileBox>
  );
};

const WrapperResume = styled(Box)``;
const Resume = styled(Flex)``;

const ResumeItem = styled(Text)`
  a {
    font-weight: 700;
    color: ${props => props.theme.colors.darkgray};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const AdminBadge = styled(Box)`
  padding: 1px 8px;
  border: 1px solid ${props => props.theme.colors.orange};
  border-radius: 2px;
  color: ${props => props.theme.colors.orange};
  display: inline-block;
`;

const More = styled(Box)`
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 4px;
  svg {
    stroke: ${props => props.theme.colors.gray};
  }
`;

const HeroAction = styled(Flex)`
  align-items: center;
`;

const FlexProfile = styled(Flex)`
  justify-content: space-between;
  ${media.lessThan('860px')`
  flex-direction: column;
  align-items: center;
  text-align: center;
`};
`;

const ProfileBox = styled(Box)``;

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
  font-size: 14px;
`;

const Location = styled(Flex)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
  line-height: 26px;
  font-size: 14px;
  border-radius: 100px;
  align-items: center;
  span {
    margin-right: 8px;
    & svg {
      stroke: ${props => props.theme.colors.gray};
      vertical-align: text-bottom;
    }
    .--rtl & {
      margin-left: 8px;
      margin-right: 0px;
    }
  }
`;

const HeroBg = styled.div<{ src: string }>`
  height: 250px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  background: ${props => props.theme.colors.lightgray};
  background-image: url(${props =>
    props.src ? props.src : props.theme.colors.lightgray});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const WrapperHero = styled.div`
  padding: 24px;
  padding-top: 0;
  z-index: 9999;
  position: relative;
  margin-top: -60px;
  padding-bottom: 0;
`;

const Img = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 4px;
  background: ${props => props.theme.colors.lightgray};
  border: 3px solid white;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
`;

const Hero = styled.div`
  width: 100%;
  position: relative;
  border-radius: 6px;
  & p {
    color: ${props => props.theme.colors.darkgray};
    padding: 0 24px;
    margin-left: 120px;
    margin: 0;
    margin-left: 136px;
    margin-top: -40px;
    line-height: 26px;
    font-size: 16px;
    padding-bottom: 16px;
  }
`;

const HeroInfo = styled(Box)`
  & button {
    span {
      vertical-align: sub;
      display: inline-block;
      height: 30px;
      margin-right: 4px;
    }
  }
`;
