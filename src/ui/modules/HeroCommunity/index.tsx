import React, { SFC } from 'react';
import { Box, Text, Flex, Button } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { clearFix } from 'polished';
import { Settings } from 'react-feather';
import media from 'styled-media-query';
import { Trans } from '@lingui/react';
import { throwUnimplementedFn } from 'common/util/ctx-mock/throwUnimplementedFn';
import EditCommunityModal from 'ui/modules/EditCommunityModal';

interface Props {
  communityId: string;
}

export interface HeroCommunityContextData {
  community: {
    icon: string;
    name: string;
    summary: string;
    preferredUsername: string;
    totalMembers: number;
    following: boolean;
    canModify: boolean;
    toggleJoin: {
      toggle(): any;
      isSubmitting: boolean;
    };
  } | null;
}

export type HeroCommunityContext = (
  cfg: { communityId: string }
) => HeroCommunityContextData;

export const HeroCommunityContext = React.createContext<HeroCommunityContext>(
  throwUnimplementedFn<HeroCommunityContext>('HeroContext')
);

export const HeroCommunity: SFC<Props> = ({ communityId }) => {
  const [, setOpenMembers] = React.useState(false);
  const [isOpenSettings, setOpenSettings] = React.useState(false);
  const { community: c } = React.useContext(HeroCommunityContext)({
    communityId
  });
  return !c ? (
    <Text>Loading...</Text>
  ) : (
    <Box p={1} mb={2}>
      <Hero>
        <Background
          id="header"
          style={{
            backgroundImage: `url(${c.icon})`
          }}
        />
        <HeroInfo>
          <Title variant="heading" mt={0}>
            {c.name}
          </Title>
          <Username fontSize={2}>@{c.preferredUsername}</Username>
          {c.summary && (
            <Summary variant="text" mt={2}>
              {c.summary}
            </Summary>
          )}
          <Info mt={3}>
            <MembersTot onClick={() => setOpenMembers(true)}>
              <Text variant="suptitle">
                <Total mr={2}>{c.totalMembers}</Total> <Trans>Members</Trans>
              </Text>
            </MembersTot>
            <Actions>
              {c.canModify ? (
                <EditButton onClick={() => setOpenSettings(true)}>
                  <Settings size={18} color={'#f98012'} />
                </EditButton>
              ) : null}
              <Button
                disabled={c.toggleJoin.isSubmitting}
                onClick={c.toggleJoin.toggle}
              >
                {c.following ? <Trans>Leave</Trans> : <Trans>Join</Trans>}
              </Button>
            </Actions>
          </Info>
        </HeroInfo>
      </Hero>
      {isOpenSettings && (
        <EditCommunityModal
          communityId={communityId}
          closeModal={() => setOpenSettings(false)}
        />
      )}
    </Box>
  );
};

const Info = styled(Flex)`
  align-items: center;
`;
const Total = styled(Text)`
  color: ${props => props.theme.colors.orange};
`;

const Title = styled(Text)`
  ${media.lessThan('medium')`
font-size: 20px !important;
`};
`;

const Summary = styled(Text)`
  ${media.lessThan('medium')`
    display: none;
`};
`;
const Actions = styled(Flex)`
  align-items: center;
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
`;

const MembersTot = styled(Flex)`
  margin-top: 0px;
  cursor: pointer;
  cursor: pointer;
  flex: 1;
  > div {
    display: flex;
  }
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

const EditButton = styled(Flex)`
  height: 40px;
  font-weight: 600;
  font-size: 13px;
  line-height: 38px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  vertical-align: bottom;
  margin-right: 16px;
  border-radius: 40px;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.orange};
  cursor: pointer;
  align-items: center;
  align-content: center;
  & svg {
    text-align: center;
    vertical-align: text-bottom;
    color: inherit !important;
  }
  .--rtl & {
    margin-right: 0px;
    margin-left: 16px;
  }
`;

const Hero = styled.div`
  width: 100%;
  position: relative;
`;

const Background = styled.div`
  margin-top: 24px;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.gray};
  position: relative;
  margin: 0 auto;
  border-radius: 4px;
  background-position: center center;
  ${media.lessThan('medium')`
    display: none;
`};
`;

const HeroInfo = styled.div`
  padding: 16px;
  ${media.lessThan('medium')`
   padding: 8px;
`} & button {
    span {
      vertical-align: sub;
      display: inline-block;
      height: 30px;
      margin-right: 4px;
    }
  }
`;

export default HeroCommunity;
