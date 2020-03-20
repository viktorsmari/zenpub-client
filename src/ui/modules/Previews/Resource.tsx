import * as React from 'react';
import { Star, ExternalLink, Paperclip } from 'react-feather';
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
  type
}) => {
  const mediaType = type !== undefined ? type : 'image'; // FIXME remove after type field is added
  const isUploaded = license !== null ? true : false; // FIXME remove after isUploaded field is added
  const avatarIcon = icon || mediaType == 'image' ? link : ''; // FIXME remove after type field is added
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
                <a href={link}>
                  {/* <ExternalLink size={17} /> */}
                  <TextLink flex={1} ml={1}>
                    {link}
                  </TextLink>
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
          <Text variant="text" mt={2}>
            {summary}
          </Text>
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
      <Actions>
        <Box>
          <Items>
            <ActionItem onClick={like.toggleLikeFormik.submitForm}>
              <ActionIcon>
                <Star
                  className="hover"
                  color={like.iLikeIt ? '#ED7E22' : 'rgba(0,0,0,.4)'}
                  strokeWidth="1"
                  size="20"
                />
              </ActionIcon>
              <Text
                variant={'suptitle'}
                sx={{ textTransform: 'capitalize' }}
                ml={1}
              >
                {like.totalLikes + ' '} <Trans>Favourite</Trans>
              </Text>
            </ActionItem>
          </Items>
        </Box>
      </Actions>
    </Bordered>
  );
};

// const TitleFlex = styled(Flex)`
//   align-items: center;
// `;

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

const Items = styled(Flex)`
  flex: 1;
  justify-content: space-around;
`;

const Actions = styled(Box)`
  position: relative;
  z-index: 999999999999999999999999999999999999;
  border-top: 1px solid #dadada;
  padding: 8px;
`;

const ActionItem = styled(Flex)`
  align-items: center;
  color: ${props => props.theme.colors.gray};
  a {
    cursor: pointer;
    color: ${props => props.theme.colors.gray};
    display: inline-flex;
    align-items: center;
    position: relative;
    z-index: 9;
    vertical-align: bottom;
    text-decoration: none;
    font-size: 14px;
    :hover {
      text-decoration: underline;
      svg {
        stroke: ${props => props.theme.colors.orange};
      }
    }
  }

  svg {
    margin: 0px;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.orange};
    }
  }
`;

const TypeItem = styled(Text)`
  border-radius: 5px;
  color: ${props => props.theme.colors.gray};
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
//   color: ${props => props.theme.colors.orange};
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
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 4px;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.darkgray};

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
//   color: ${props => props.theme.colors.darkgray};
// `;

const Wrapper = styled(Flex)`
  position: relative;
  text-decoration: none;
  background: #fff;
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
  color: ${props => props.theme.colors.darkgray};
  font-size: 20px;
  text-decoration: none;
`;
