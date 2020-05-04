import * as React from 'react';
import {
  Star,
  ExternalLink,
  Paperclip,
  MoreHorizontal,
  Flag
} from 'react-feather';
// import { FileText, ExternalLink, Star } from 'react-feather';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
import { ellipsis } from 'polished';
import { FormikHook } from 'ui/@types/types';
import { Trans } from '@lingui/react';
// import { ellipsis } from 'polished';
export interface LikeActions {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number;
  iLikeIt: boolean;
}
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import Modal from 'ui/modules/Modal';
import { typography } from 'mn-constants';

// const LicenseIcon0 = require('./cc-zero.png');
// const LicenseIcon1 = require('./by.png');
// const LicenseIcon2 = require('./by-sa.png');

export interface Props {
  icon: string;
  name: string;
  summary: string;
  link: string;
  like: LikeActions;
  license: string | null;
  acceptedLicenses?: string[];
  isLocal: boolean;
  type?: string;
  isFlagged: boolean;
  FlagModal: null | React.ComponentType<{ done(): unknown }>;
  hideActions?: boolean;
}

export const Resource: React.FC<Props> = ({
  icon,
  name,
  summary,
  link,
  like,
  isLocal,
  license,
  acceptedLicenses,
  type,
  isFlagged,
  FlagModal,
  hideActions
}) => {
  const mediaType = type !== undefined ? type : 'image'; // FIXME remove after type field is added
  const isUploaded = license !== null ? true : false; // FIXME remove after isUploaded field is added
  const avatarIcon = icon || mediaType == 'image' ? link : ''; // FIXME remove after type field is added
  const [isOpen, onOpen] = React.useState(false);
  // const [isEnterUrlOpen, onEnterUrlOpen] = React.useState(false);
  const [isOpenFlagModal, setOpenFlagModal] = React.useState(false);

  return (
    // <WrapperLink to={'/collections/' + id}>
    <Bordered>
      <Wrapper p={2}>
        <Avatar size="m" src={icon || avatarIcon} />
        <Infos flex={1} ml={3}>
          <TitleLink href={link} target="_blank">
            {/* <Badge mt={1}>Video</Badge> */}
            <Title flex="1">
              {isUploaded ? (
                <Paperclip strokeWidth="1" size={18} />
              ) : (
                <ExternalLink strokeWidth="1" size={18} />
              )}
              {name}
            </Title>
          </TitleLink>
          {isUploaded ? (
            <>
              {/* <TypeItem mt={2}>{mediaType}</TypeItem> */}
              <TypeItem mt={1}>{license}</TypeItem>
            </>
          ) : (
            <>
              <ActionItem>
                {/* <TypeItem>{mediaType}</TypeItem>  */}
                <a href={link} target="_blank">
                  {/* <ExternalLink size={17} /> */}
                  <TextLink flex={1}>{link}</TextLink>
                </a>
              </ActionItem>
            </>
          )}
          {/* <TypeItem>{mediaType}</TypeItem>
          {isUploaded ? <TypeItem>{license}</TypeItem>: null } */}
          {/* <ActionItem mt={1}>
            <a href={link}>
              {isLocal ? <Link size={17} /> : <ExternalLink size={17} />}
              <TextLink flex={1} ml={1}>
                {link}
              </TextLink>
            </a>
          </ActionItem> */}
          <Summary variant="text" mt={2}>
            {summary}
          </Summary>
          {/* {isUploaded ? (
            license === acceptedLicenses![0] ? (
              <Img src={LicenseIcon0} />
            ) : license === acceptedLicenses![1] ? (
              <Img src={LicenseIcon1} />
            ) : (
              <Img src={LicenseIcon2} />
            )
          ) : null} */}
          {/* <Hashtags mt={1}>
            <Text variant="text" mr={2}>
              #tutorial
            </Text>
            <Text variant="text">#exp</Text>
          </Hashtags> */}
        </Infos>
      </Wrapper>
      {hideActions ? null : (
        <Actions>
          <ActionItem
            liked={like.iLikeIt ? true : false}
            onClick={like.toggleLikeFormik.submitForm}
          >
            <ActionIcon>
              <Star strokeWidth="1" size="18" />
            </ActionIcon>
            <ActionText
              variant={'text'}
              sx={{ textTransform: 'capitalize' }}
              ml={1}
            >
              {like.totalLikes + ' '} <Trans>Favourite</Trans>
            </ActionText>
          </ActionItem>
          <ActionItem
            onClick={() => onOpen(true)}
            sx={{ position: 'relative' }}
          >
            <ActionIcon>
              <MoreHorizontal className="hover" size={18} />
            </ActionIcon>
            <ActionText
              variant={'text'}
              sx={{ textTransform: 'capitalize' }}
              ml={1}
            >
              <Trans>More</Trans>
            </ActionText>
            {isOpen && (
              <Dropdown orientation="bottom" cb={onOpen}>
                {FlagModal && (
                  <DropdownItem onClick={() => setOpenFlagModal(true)}>
                    <Flag size={20} color={'rgb(101, 119, 134)'} />
                    <Text sx={{ flex: 1 }} ml={2}>
                      {!isFlagged ? (
                        <Trans>Flag this resource</Trans>
                      ) : (
                        <Trans>Unflag this resource</Trans>
                      )}
                    </Text>
                  </DropdownItem>
                )}
              </Dropdown>
            )}
          </ActionItem>
        </Actions>
      )}
      {FlagModal && isOpenFlagModal && (
        <Modal closeModal={() => setOpenFlagModal(false)}>
          <FlagModal done={() => setOpenFlagModal(false)} />
        </Modal>
      )}
    </Bordered>
  );
};
const Summary = styled(Text)`
  color: ${props => props.theme.colors.dark};
`;
const ActionText = styled(Text)`
  font-size: ${typography.size.s1};
`;
const ActionIcon = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 99999px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: -8px;
  svg {
    margin: 0 auto;
  }
`;

const Actions = styled(Flex)`
  flex: 1;
  justify-content: start;
  padding: 8px;
  padding-top: 0;
`;

const ActionItem = styled(Flex)<{ liked?: boolean }>`
  align-items: center;
  color: ${props =>
    props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  div {
    color: ${props =>
      props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  }
  cursor: pointer;
  background: ${props =>
    props.liked
      ? props.theme.colors.secondary
      : props.theme.colors.mediumlight};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 8px;
  text-align: center;
  font-size: ${typography.size.s1};
  svg {
    stroke: ${props =>
      props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.mediumdark};
      // fill: ${props => props.theme.colors.mediumdark};
    }
  }
`;

const TypeItem = styled(Text)`
  border-radius: 5px;
  color: ${props => props.theme.colors.medium};
  text-transform: uppercase;
  border-radius: 10px;
  padding: 0px 6px;
  font-size: 10px;
  font-weight: 600;
  cursor: default;
  margin-right: 4px;
  display: inline-flex;
  border: 1px solid ${props => props.theme.colors.primary};
`;

// const ResourceType = styled(Text)`
//   border-radius: 5px;
//   color: ${props => props.theme.colors.primary};
//   text-transform: uppercase;
//   border-radius: 10px;
//   border: 1px solid;
//   padding: 0px 6px;
//   font-size: 11px;
//   cursor: default;
//   margin-right: 6px;
//   display: inline-flex;
// `;

const TextLink = styled(Text)`
  ${ellipsis('250px')};
  color: ${props => props.theme.colors.mediumdark};
`;

// const Img = styled(Image)`
//   max-width: 82px;
//   margin-top: 5px;
//   height: 24px;
// `;

// const WrapperLink = styled(NavLink)`
//   text-decoration: none;
// `;

const Bordered = styled(Box)`
  border: ${props => props.theme.colors.border};
  border-radius: 4px;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.darker};

  svg {
    margin: 0px;
    margin-right: 5px;
    display: inline-flex;
    position: relative;
    top: 2px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
// const Hashtags = styled(Flex)`
//   div {
//     color: ${props => props.theme.colors.primary};
//   }
// `;

// const Badge = styled(Box)`
//   border: 1px solid ${props => props.theme.colors.primary};
//   margin-right: 8px;
//   text-transform: uppercase;
//   font-size: 10px;
//   font-weight: 600;
//   border-radius: 30px;
//   line-height: 20px;
//   height: 20px;
//   padding: 0 8px;
//   color: ${props => props.theme.colors.mediumdark};
// `;

const Wrapper = styled(Flex)`
  position: relative;
  text-decoration: none;
  background: ${props => props.theme.colors.appInverse};
  margin-top: 0;
  border-radius: 6px;
`;

const Infos = styled(Box)`
  flex: 1;
  position: relative;
  div {
    text-decoration: none;
  }
`;
const Title = styled(Heading)`
  color: ${props => props.theme.colors.darker};
  font-size: 20px;
  text-decoration: none;
`;
