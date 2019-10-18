import { Trans } from '@lingui/macro';
import * as React from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import CollectionsFollowed from '../collections.followed';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';
import { Flex } from 'rebass';
class ColloctionsFollowed extends React.Component<{}> {
  render() {
    return (
      <Flex>
        <WrapperCont>
          <Wrapper>
            <Tabs>
              <SuperTabList>
                <SuperTab>
                  <h5>
                    <Trans>Followed collections</Trans>
                  </h5>
                </SuperTab>
              </SuperTabList>
              <TabPanel>
                <CollectionsFollowed />
              </TabPanel>
            </Tabs>
          </Wrapper>
        </WrapperCont>
      </Flex>
    );
  }
}

export default ColloctionsFollowed;
