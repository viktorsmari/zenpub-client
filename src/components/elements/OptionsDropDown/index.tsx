import * as React from 'react';
import styled from '../../../themes/styled';
import { Text } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import FlagModal from '../FlagModal';

const WrapperMenu = styled.div`
  box-sizing: border-box;
  width: 250px;
  padding: 5px;
  border-radius: 0.25em;
  background-color: rgb(232, 232, 232);
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 999999999999;
`;
const OptionsMenu = styled.div`
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;
const List = styled.div<{ lined?: boolean }>`
  padding: 8px;
  border-bottom: ${props => (props.lined ? '1px solid #dadada' : null)};
`;
const Item = styled(Text)`
  line-height: 50px;
  height: 50px;
  cursor: pointer;
  & span {
    display: inline-block;
    margin-right: 8px;
    & svg {
      vertical-align: sub;
    }
  }
  & a {
    color: inherit !important;
    text-decoration: none;
  }
  &:hover {
    color: rgba(0, 0, 0, 0.9);
  }
`;

const OptionsDropdown: React.FC = () => {
  const [isFlagOpen, onFlagOpen] = React.useState(false);
  return (
    <>
      <WrapperMenu>
        <OptionsMenu>
          <List lined>
            <Item variant="link" onClick={() => onFlagOpen(true)}>
              {/* <span>
                                <User size={18} color={'#333'} />
                            </span> */}
              <Trans>Flag</Trans>
            </Item>
          </List>
        </OptionsMenu>
      </WrapperMenu>
      <FlagModal
        toggleModal={() => onFlagOpen(false)}
        modalIsOpen={isFlagOpen}
        // communityId={community.localId}
      />
    </>
  );
};
export default OptionsDropdown;
