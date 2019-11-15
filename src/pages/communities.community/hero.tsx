import React, { SFC } from 'react';
import { Box, Text, Flex } from 'rebass/styled-components';
import styled from '../../themes/styled';
import Join from './Join';
import { clearFix } from 'polished';
import { Settings } from 'react-feather';
import media from 'styled-media-query';

interface Props {
  community: {
    icon: string;
    name: string;
    summary: string;
    members: any;
    localId: number;
    id: string;
    preferredUsername: string;
    followed: boolean;
  };
  showUsers(boolean): boolean;
  editCommunity: any;
}

const HeroComp: SFC<Props> = ({ community, showUsers, editCommunity }) => (
  <Box p={1} mb={2}>
    <Hero>
      <Background
        id="header"
        style={{ backgroundImage: `url(${community.icon})` }}
      />
      <HeroInfo>
        <Title variant="heading" mt={0}>
          {community.name}
        </Title>
        {community.preferredUsername ? (
          <Username mt={2} fontSize={2}>
            @{community.preferredUsername}
          </Username>
        ) : null}
        <Summary variant="text" mt={2}>
          {community.summary}
        </Summary>

        <Flex mt={3}>
          <MembersTot onClick={() => showUsers(true)}>
            {community.members.edges.slice(0, 3).map((a, i) => {
              return (
                <ImgTot
                  key={i}
                  style={{
                    backgroundImage: `url(${a.node.icon ||
                      `https://www.gravatar.com/avatar/${
                        a.node.localId
                      }?f=y&d=identicon`})`
                  }}
                />
              );
            })}{' '}
            <Tot>
              {community.members.totalCount - 3 > 0
                ? `+ ${community.members.totalCount - 3} More`
                : ``}
            </Tot>
          </MembersTot>
          <Actions>
            {community.localId === 7 ||
            community.localId === 15 ||
            community.followed == false ? null : (
              <EditButton onClick={editCommunity}>
                <Settings size={18} color={'#f98012'} />
              </EditButton>
            )}
            <Join
              id={community.localId}
              followed={community.followed}
              externalId={community.id}
            />
          </Actions>
        </Flex>
      </HeroInfo>
    </Hero>
  </Box>
);

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

const Tot = styled.div`
  float: left;
  height: 24px;
  line-height: 24px;
  vertical-align: middle;
  margin-left: 8px;
  line-height: 32px;
  height: 32px;
  font-size: 13px;
  color: #cacaca;
  font-weight: 600;
`;

const MembersTot = styled.div`
  margin-top: 0px;
  font-size: 12px;
  cursor: pointer;
  cursor: pointer;
  flex: 1;
  ${clearFix()} & span {
    margin-right: 8px;
    float: left;
    height: 32px;
    line-height: 32px;
    & svg {
      vertical-align: middle;
    }
  }
`;

const ImgTot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  float: left;
  margin-left: -4px;
  background-size: cover;
  border: 2px solid white;
`;

const EditButton = styled.span`
  height: 40px;
  font-weight: 600;
  font-size: 13px;
  line-height: 38px;
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 40px;
  vertical-align: bottom;
  margin-right: 16px;
  border-radius: 40px;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.orange};
  cursor: pointer;
  & svg {
    text-align: center;
    vertical-align: text-bottom;
    color: inherit !important;
  }
`;

const Hero = styled.div`
  width: 100%;
  position: relative;
`;

const Background = styled.div`
  margin-top: 24px;
  height: 250px;
  // border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.gray};
  position: relative;
  margin: 0 auto;
  // margin: -4px;
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

export default HeroComp;
