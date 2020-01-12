import React, { SFC } from 'react';
import styled from 'ui/themes/styled';
import { Flex, Text, Box, Button } from 'rebass/styled-components';
import media from 'styled-media-query';
import { clearFix } from 'polished';
import { Settings } from 'react-feather';
import { throwUnimplementedFn } from 'common/util/ctx-mock/throwUnimplementedFn';
import { EditCollectionModal } from 'ui/modules/EditCollectionModal';

interface Props {
  collectionId: string;
}

export interface HeroCollectionContextData {
  icon: string;
  preferredUsername: string;
  title: string;
  summary: string;
  isMine: boolean;
  toggleJoin: {
    toggle(): any;
    isSubmitting: boolean;
  };
  myFollow: boolean;
}

export type HeroCollectionContext = (
  cfg: { collectionId: string }
) => HeroCollectionContextData;

export const HeroCollectionContext = React.createContext<HeroCollectionContext>(
  throwUnimplementedFn<HeroCollectionContext>('Hero Collection')
);

export const HeroCollection: SFC<Props> = ({ collectionId }) => {
  const c = React.useContext(HeroCollectionContext)({ collectionId });
  const [isOpenSettings, setOpenSettings] = React.useState(false);
  return !c ? (
    <Text>Loading...</Text>
  ) : (
    <HeroCont>
      <Hero>
        <Background style={{ backgroundImage: `url(${c.icon})` }} />
        <HeroInfo>
          <Title fontSize={5} fontWeight={'bold'}>
            {c.title}
          </Title>
          <Username fontSize={2}>+{c.preferredUsername}</Username>
          <Description fontSize={2} mt={2}>
            {c.summary}
          </Description>
          <ActionsHero mt={3} alignItems={'center'}>
            {c.isMine ? (
              <EditButton onClick={() => setOpenSettings(true)}>
                <Settings size={18} color={'#f98012'} />
              </EditButton>
            ) : null}
            <Button
              disabled={c.toggleJoin.isSubmitting}
              onClick={c.toggleJoin.toggle}
            >
              {c.myFollow ? 'Leave' : 'Join'}
            </Button>
          </ActionsHero>
        </HeroInfo>
      </Hero>
      {isOpenSettings && (
        <EditCollectionModal
          collectionId={collectionId}
          closeModal={() => setOpenSettings(false)}
        />
      )}
    </HeroCont>
  );
};

const Title = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
`;

const Description = styled(Text)`
  color: ${props => props.theme.colors.darkgray};
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.gray};
  font-weight: 500;
`;

const ActionsHero = styled(Flex)``;

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
