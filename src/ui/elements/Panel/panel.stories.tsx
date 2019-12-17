import React from 'react';
import { Box } from 'rebass';
import { storiesOf } from '@storybook/react';
import { WrapperPanel, Panel, PanelTitle, Nav, NavItem } from './index';
import { themeDeco } from 'ui/styleguide/storiesThemeDecorator';
storiesOf('Elements/Panel', module)
  .addDecorator(themeDeco())
  .add('Standard', () => (
    <Box p={3} bg="#F5F6F7">
      <WrapperPanel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            <>Browse Home instance</>
          </PanelTitle>
          <Nav>
            <NavItem mb={4} fontSize={1} fontWeight={'bold'}>
              <>All communities</>
            </NavItem>
            <NavItem fontSize={1} fontWeight={'bold'}>
              <>All collections</>
            </NavItem>
          </Nav>
        </Panel>
      </WrapperPanel>
    </Box>
  ));
