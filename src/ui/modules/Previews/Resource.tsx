import * as React from 'react';
import { ExternalLink, Star } from 'react-feather';
// import { NavLink } from 'react-router-dom';
import { Box, Flex, Heading, Text, Image } from 'rebass/styled-components';
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
const LicenseIcon0 = require('./cc-zero.png');
const LicenseIcon1 = require('./by.png');
const LicenseIcon2 = require('./by-sa.png');

export interface Props {
  icon: string;
  name: string;
  summary: string;
  link: string;
  like: LikeActions;
  license?: string;
  acceptedLicenses?: string[];
  isLocal: boolean;
}

export const Resource: React.FC<Props> = ({
  icon,
  name,
  summary,
  link,
  like,
  isLocal,
  license,
  acceptedLicenses
}) => {
  return (
    // <WrapperLink to={'/collections/' + id}>
    <Bordered>
      <Wrapper p={2}>
        <Avatar size="m" src={icon} />
        <Infos flex={1} ml={3}>
          <Flex>
            {/* <Badge mt={1}>Video</Badge> */}
            <Title flex="1">{name}</Title>
          </Flex>
          <ActionItem mt={1}>
            <ExternalLink size={16} />
            <TextLink flex={1} ml={2}>
              {link}
            </TextLink>
          </ActionItem>
          <Text variant="text" mt={2}>
            {summary}
          </Text>
          {isLocal ? (
            license === acceptedLicenses![0] ? (
              <Img src={LicenseIcon0} />
            ) : license === acceptedLicenses![1] ? (
              <Img src={LicenseIcon1} />
            ) : (
              <Img src={LicenseIcon2} />
            )
          ) : null}
          <Hashtags mt={1}>
            <Text variant="text" mr={2}>
              #tutorial
            </Text>
            <Text variant="text">#exp</Text>
          </Hashtags>
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
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.orange};
    }
  }
`;

const TextLink = styled(Text)`
  ${ellipsis('250px')};
`;
const Img = styled(Image)`
  max-width: 82px;
  margin-top: 5px;
`;

// const WrapperLink = styled(NavLink)`
//   text-decoration: none;
// `;

const Bordered = styled(Box)`
  border: 1px solid ${props => props.theme.colors.lightgray};
  border-radius: 4px;
`;

const Hashtags = styled(Flex)`
  div {
    color: ${props => props.theme.colors.primary};
  }
`;

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
