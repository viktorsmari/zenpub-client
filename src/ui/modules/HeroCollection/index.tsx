import { clearFix } from 'polished';
import React, { ComponentType, SFC } from 'react';
import { Settings } from 'react-feather';
import { Box, Button, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import Modal from 'ui/modules/Modal';
import styled from 'ui/themes/styled';

export enum Status {
  Loading,
  Loaded
}

export interface CollectionLoading {
  status: Status.Loading;
}
export interface CollectionLoaded {
  status: Status.Loaded;
  icon: string;
  preferredUsername: string;
  title: string;
  summary: string;
  isMine: boolean;
  toggleJoin: {
    toggle(): any;
    isSubmitting: boolean;
  };
  following: boolean;
  EditCollectionPanel: ComponentType<{ done(): any }>;
}
export interface Props {
  collection: CollectionLoaded | CollectionLoading;
}

export const HeroCollection: SFC<Props> = ({ collection: c }) => {
  const [isOpenSettings, setOpenSettings] = React.useState(false);
  return c.status === Status.Loading ? (
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
              {c.following ? 'Leave' : 'Join'}
            </Button>
          </ActionsHero>
        </HeroInfo>
      </Hero>
      {isOpenSettings && (
        <Modal closeModal={() => setOpenSettings(false)}>
          <c.EditCollectionPanel done={() => setOpenSettings(false)} />
        </Modal>
      )}
    </HeroCont>
  );
};
export default HeroCollection;
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
