import { Trans } from '@lingui/macro';
import * as React from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import Main from '../../components/chrome/Main/Main';
import { SuperTab, SuperTabList } from '../../components/elements/SuperTab';
import CollectionsFollowed from '../collections.followed';
import { Wrapper, WrapperCont } from '../communities.all/CommunitiesAll';

class ColloctionsFollowed extends React.Component<{}> {
  render() {
    return (
      <Main>
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
      </Main>
    );
  }
}

export default ColloctionsFollowed;
