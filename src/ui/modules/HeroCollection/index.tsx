import { clearFix, darken } from 'polished';
import React, { ComponentType, FC } from 'react';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import Modal from 'ui/modules/Modal';
import styled from 'ui/themes/styled';
import { ChevronLeft } from 'react-feather';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Avatar from 'ui/elements/Avatar';
import Button from 'ui/elements/Button';
import { Dropdown, DropdownItem, AdminDropdownItem } from 'ui/modules/Dropdown';
import { Settings, MoreVertical, Flag, Star } from 'react-feather';
import { FormikHook } from 'ui/@types/types';

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
  icon: string;
  name: string;
  fullName: string;
  summary: string;
  canModify: boolean;
  communityId: string;
  communityName: string;
  communityIcon: string;
  toggleJoinFormik: FormikHook;
  flagged: boolean;
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
      <HeaderWrapper
        id={c.communityId}
        name={c.communityName}
        icon={c.communityIcon}
      />

      <Hero>
        <Background style={{ backgroundImage: `url(${c.icon})` }} />
        <HeroInfo>
          <Title fontSize={5} fontWeight={'bold'}>
            {c.name}
          </Title>
          <Username mt={1} fontSize={2}>
            +{c.fullName}
          </Username>
          <Description fontSize={2} mt={2}>
            {c.summary}
          </Description>
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
                    <Flag size={20} color={'rgb(101, 119, 134)'} />
                    <Text sx={{ flex: 1 }} ml={2}>
                      <Trans>Flag this collection</Trans>
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

const HeaderWrapper: React.FC<{ id: string; name: string; icon: string }> = ({
  id,
  name,
  icon
}) => {
  const history = useHistory();
  return (
    <Header>
      <Left onClick={() => history.goBack()}>
        <ChevronLeft size="24" />
        <Text>
          <Trans>Back</Trans>
        </Text>
      </Left>
      <Right>
        <Link to={`/communities/${id}`}>
          <LinkImg>
            <Avatar size="s" src={icon} />
          </LinkImg>
          <Text variant="suptitle">{name}</Text>
        </Link>
      </Right>
    </Header>
  );
};

export default HeroCollection;

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
  & ${AdminDropdownItem} {
    border-top: 1px dotted ${props => darken('0.1', props.theme.colors.primary)};

    svg {
      stroke: ${props => darken('0.1', props.theme.colors.primary)};
    }
  }
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
`;
const Right = styled(Flex)`
  align-items: center;
  a {
    display: flex;
    align-items: center;
  }
`;
const Left = styled(Flex)`
  flex: auto;
  align-items: center;
  svg {
    margin: 0;
  }
`;

const Header = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  cursor: pointer;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;

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
