import { clearFix, darken } from 'polished';
import React, { ComponentType, FC } from 'react';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import Modal from 'ui/modules/Modal';
import styled from 'ui/themes/styled';
// import { ChevronLeft } from 'react-feather';
import { Trans } from '@lingui/macro';
import { Link, NavLink } from 'react-router-dom';
// import { useHistory } from 'react-router';
import Avatar from 'ui/elements/Avatar';
import Button from 'ui/elements/Button';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import { Settings, MoreVertical, Flag as FlagIcon, Star } from 'react-feather';
import { FormikHook } from 'ui/@types/types';
import DOMPurify from 'dompurify';

export enum Status {
  Loading,
  Loaded
}

export interface CollectionLoading {
  status: Status.Loading;
}
export interface CollectionLoaded {
  status: Status.Loaded;
  isAdmin: boolean;
  // isFeatured?: boolean;
  basePath: string;
  icon: string;
  name: string;
  fullName: string;
  summary: string;
  canModify: boolean;
  communityId: string;
  communityName: string;
  communityIcon: string;
  toggleJoinFormik: FormikHook;
  isFlagged: boolean;
  followerCount: number; //FIX ME add followerCount
  // contributorCount?: number; //FIX ME add contributorCount
  following: boolean;
  EditCollectionPanel: ComponentType<{ done(): any }>;
  FlagModal: ComponentType<{ done(): any }>;
  FeaturedModal: ComponentType<{ done(): any }>;
}
export interface Props {
  collection: CollectionLoaded | CollectionLoading;
}

export const HeroCollection: FC<Props> = ({ collection: c }) => {
  const [isOpenSettings, setOpenSettings] = React.useState(false);
  const [isOpenDropdown, setOpenDropdown] = React.useState(false);
  const [isOpenFlag, setOpenFlag] = React.useState(false);
  const [isOpenFeatured, setOpenFeatured] = React.useState(false);

  return c.status === Status.Loading ? (
    <Text>Loading...</Text>
  ) : (
    <HeroCont>
      <Hero>
        <Box sx={{ position: 'relative' }}>
          <Background style={{ backgroundImage: `url(${c.icon})` }} />
          <Right>
            <Link to={`/communities/${c.communityId}`}>
              <LinkImg>
                <Avatar size="s" src={c.communityIcon} />
              </LinkImg>
              {/* <CommTitle variant="link">{c.communityName}</CommTitle> */}
            </Link>
          </Right>
        </Box>
        <HeroInfo>
          <Title fontSize={5} fontWeight={'bold'}>
            {c.name}
          </Title>
          <Username mt={1} fontSize={2}>
            +{c.fullName}
          </Username>
          <Description
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(c.summary) }}
            fontSize={2}
            mt={2}
          />
          <CountWrapper>
            <CountTot to={`${c.basePath}/followers`}>
              <Text variant="suptitle">
                <Total mr={2}>{c.followerCount}</Total>
                <Trans>Followers</Trans>
              </Text>
            </CountTot>
          </CountWrapper>
          <ActionsHero mt={3} alignItems={'center'}>
            <More mr={2}>
              <MoreVertical size={20} onClick={() => setOpenDropdown(true)} />
              {isOpenDropdown && (
                <Dropdown orientation={'top'} cb={setOpenDropdown}>
                  {c.canModify && (
                    <DropdownItem onClick={() => setOpenSettings(true)}>
                      <Settings size={20} color={'rgb(101, 119, 134)'} />
                      <Text sx={{ flex: 1 }} ml={2}>
                        <Trans>Edit the collection</Trans>
                      </Text>
                    </DropdownItem>
                  )}
                  <DropdownItem onClick={() => setOpenFlag(true)}>
                    <FlagIcon size={20} color={'rgb(101, 119, 134)'} />
                    <Text sx={{ flex: 1 }} ml={2}>
                      {!c.isFlagged ? (
                        <Trans>Flag this collection</Trans>
                      ) : (
                        <Trans>Unflag this collection</Trans>
                      )}
                    </Text>
                  </DropdownItem>
                  {c.isAdmin ? (
                    <AdminDropdownItem onClick={() => setOpenFeatured(true)}>
                      <Star size={20} color={'rgb(211, 103, 5)'} />
                      <Text sx={{ flex: 1 }} ml={2}>
                        {
                          /* c.isFeatured ? (
                          <Trans>Remove from featured list</Trans>
                        ) :  */ <Trans>
                            Add to featured list
                          </Trans>
                        }
                      </Text>
                    </AdminDropdownItem>
                  ) : null}
                </Dropdown>
              )}
            </More>
            <Button
              variant={c.following ? 'danger' : 'primary'}
              disabled={c.toggleJoinFormik.isSubmitting}
              onClick={c.toggleJoinFormik.submitForm}
              isSubmitting={c.toggleJoinFormik.isSubmitting}
            >
              {c.following ? 'Unfollow' : 'Follow'}
            </Button>
          </ActionsHero>
        </HeroInfo>
      </Hero>
      {isOpenSettings && (
        <Modal closeModal={() => setOpenSettings(false)}>
          <c.EditCollectionPanel done={() => setOpenSettings(false)} />
        </Modal>
      )}
      {isOpenFlag && (
        <Modal closeModal={() => setOpenFlag(false)}>
          <c.FlagModal done={() => setOpenFlag(false)} />
        </Modal>
      )}
      {isOpenFeatured && c.FeaturedModal != null && (
        <Modal closeModal={() => setOpenFeatured(false)}>
          <c.FeaturedModal done={() => setOpenFeatured(false)} />
        </Modal>
      )}
    </HeroCont>
  );
};

// const HeaderWrapper: React.FC<{ id: string; name: string; icon: string }> = ({
//   id,
//   name,
//   icon
// }) => {
//   const history = useHistory();
//   return (
//     <Header>
//       <Left onClick={() => history.goBack()}>
//         <ChevronLeft size="24" />
//         <Text>
//           <Trans>Back</Trans>
//         </Text>
//       </Left>
//       <Right>
//         <Link to={`/communities/${id}`}>
//           <LinkImg>
//             <Avatar size="s" src={icon} />
//           </LinkImg>
//           <Text variant="suptitle">{name}</Text>
//         </Link>
//       </Right>
//     </Header>
//   );
// };

export default HeroCollection;

// const CommTitle = styled(Text)`
//   color: ${props => props.theme.colors.darkgray};
// `
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
    margin: 0 auto;
    stroke: ${props => props.theme.colors.gray};
  }
`;

const AdminDropdownItem = styled(DropdownItem)`
    border-top: 1px solid ${props =>
      darken('0.1', props.theme.colors.lightgray)};

    // svg {
    //   stroke: ${props => darken('0.1', props.theme.colors.primary)};
    // }
    `;

// const SettingsButton = styled.div`
//   margin-right: 16px;

//   .--rtl & {
//     margin-right: 0px;
//     margin-left: 16px;
//   }
// `;

const LinkImg = styled(Box)`
  margin-right: 8px;
  .--rtl & {
    margin-right: 0px;
    margin-left: 8px;
  }
  div {
    border: 2px solid white;
    min-width: 42px;
    min-height: 42px;
  }
`;
const Right = styled(Flex)`
  align-items: center;
  display: inline-block;
  position: absolute;
  left: 8px;
  bottom: -18px
  top: 106px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;
// const Left = styled(Flex)`
//   flex: auto;
//   align-items: center;
//   svg {
//     margin: 0;
//   }
// `;

// const Header = styled(Flex)`
//   border-bottom: 1px solid ${props => props.theme.colors.lightgray};
//   height: 50px;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 8px;
//   cursor: pointer;
//   a {
//     display: flex;
//     flex: 1;
//     text-decoration: none;
//   }
// `;

const Title = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
`;

const Description = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
  font-size: 14px;
  text-transform: lowercase;
`;

const ActionsHero = styled(Flex)``;

const HeroInfo = styled.div`
  flex: 1;
  margin-left: 16px;
  position: relative;
  ${clearFix()};
  & h2 {
    margin: 0;
    line-height: 32px !important;
    font-size: 24px !important;
    color: ${props => props.theme.colors.darkgray};
    ${media.lessThan('medium')`
      margin-top: 8px;
    `};
  }
  & p {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-size: 15px;
    margin-top: 8px;
    color: ${props => props.theme.colors.darkgray};
  }
  .--rtl & {
    margin-right: 16px;
    margin-left: 0px;
  }
`;
const HeroCont = styled(Box)`
  margin-bottom: 16px;
  border-radius: 6px;
  box-sizing: border-box;
  background: #fff;
`;

const Hero = styled(Flex)`
  width: 100%;
  position: relative;
  padding: 16px;
  ${media.lessThan('medium')`
  text-align: center;
  display: block;
`};
`;

const Background = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.lightgray};
  position: relative;
  margin: 0 auto;
`;

const CountWrapper = styled(Flex)`
  margin-top: 10px;
  flex: 1;
  > div {
    display: flex;
  }
`;

const CountTot = styled(NavLink)`
  margin-top: 0px;
  cursor: pointer;
  cursor: pointer;
  margin-right: 20px;
  text-decoration: none;
  ${clearFix()} & span {
    margin-right: 4px;
    float: left;
    height: 32px;
    line-height: 32px;
    & svg {
      vertical-align: middle;
    }
    .--rtl & {
      float: right;
      margin-right: 0px;
      margin-left: 8px;
    }
  }
`;

const Total = styled(Text)`
  display: inline-flex;
  color: ${props => props.theme.colors.orange};
`;
