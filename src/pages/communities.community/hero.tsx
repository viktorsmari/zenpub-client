import React, { SFC } from 'react';
import { Box, Text, Flex } from 'rebass/styled-components';
import styled from '../../themes/styled';
import Join from './Join';
import { clearFix } from 'polished';
import { Settings } from 'react-feather';
import media from 'styled-media-query';
import { GetCommunityQueryQuery } from '../../graphql/generated/getCommunity.generated';
import { SessionContext } from '../../context/global/sessionCtx';

interface Props {
  community: GetCommunityQueryQuery['community'];
  showUsers(boolean): unknown;
  editCommunity: any;
}

const HeroComp: SFC<Props> = ({ community, showUsers, editCommunity }) => {
  const { auth } = React.useContext(SessionContext);
  const isMine =
    !!auth && !!community && auth.me.user.id === community.creator.id;

  return (
    community && (
      <Box p={1} mb={2}>
        <Hero>
          <Background
            id="header"
            style={{
              backgroundImage: `url(${community.icon || community.image})`
            }}
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
                {community.followers.edges.slice(0, 3).map((a, i) => {
                  return (
                    a && (
                      <ImgTot
                        key={i}
                        style={{
                          backgroundImage: `url(${a.node.creator.icon ||
                            `https://www.gravatar.com/avatar/${
                              a.node.id
                            }?f=y&d=identicon`})`
                        }}
                      />
                    )
                  );
                })}{' '}
                <Tot>
                  {community.followers.totalCount - 3 > 0
                    ? `+ ${community.followers.totalCount - 3} More`
                    : ``}
                </Tot>
              </MembersTot>
              <Actions>
                {isMine ? (
                  <EditButton onClick={editCommunity}>
                    <Settings size={18} color={'#f98012'} />
                  </EditButton>
                ) : null}
                <Join
                  id={community.id}
                  followed={!!community.myFollow}
                  externalId={community.id}
                />
              </Actions>
            </Flex>
          </HeroInfo>
        </Hero>
      </Box>
    )
  );
};
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
  .--rtl & {
    float: right;
    margin-left: 0px;
    margin-right: 8px;
  }
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
    .--rtl & {
      float: right;
      margin-right: 0px;
      margin-left: 8px;
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
  .--rtl & {
    float: right;
    margin-right: -4px;
    margin-left: 0px;
  }
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
