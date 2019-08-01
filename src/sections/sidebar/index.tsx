import * as React from 'react' 
import {Box, Image, Text, Flex} from 'rebass'
import Avatar from '../../styleguide/avatar'
import styled from '../../themes/styled';
import { Trans } from '@lingui/macro';
import { NavLink } from 'react-router-dom';
import { Globe } from 'react-feather';
const MnetLogo = require('./moodle-logo.png')
const SidebarComponent = styled(Box)`
overflow-y: overlay;
`
const Header = styled(Flex)`
input {
  margin-left: 8px !important;
}
`
const Nav = styled(Box)`
  border-top: 4px solid ${props => props.theme.styles.colors.lightgray};
  a {
    text-decoration: none;
  }
`

const SidebarLink = styled(NavLink)`
  position: relative;
  color: inherit;
  &.active {
    color: ${props => props.theme.styles.colors.orange};
      position: relative;
      &:before {
        position: absolute;
        content: "";
        left: -10px;
        top: 24px;
        width: 8px;
        border-radius: 100px;
        height: 8px;
        display: block;
        background: ${props => props.theme.styles.colors.orange}
      }
    }
  div {
    color: ${props => props.isActive ? props.theme.styles.colors.orange : "inherit" };  
  }

`


const NavItem = styled(Flex)`

border-radius: 4px;
padding: 8px;
&:hover {
  background: ${props => props.theme.styles.colors.lightgray};  
}
`
const SupText = styled(Text)`
  color: ${props => props.theme.styles.colors.gray};
  text-transform: uppercase;
`

const ItemTitle = styled(Text)`
  color: ${props => props.theme.styles.colors.darkgray};
`

const Sidebar = (props) => {
  return (
 <SidebarComponent width={300} p={3}>
   <Header alignItems={"center"}>
      <Avatar src={props.data.me.user.icon} name={props.data.me.user.name}/>
      {/* <Input placeholder={"Search here"} /> */}
   </Header>
   <Nav mt={3} pt={3}>
    <SidebarLink exact to={"/discover"}
    >
     <NavItem mb={3} alignItems={"center"}>
        <Globe size={36} />
        <ItemTitle ml={2} fontSize={2} fontWeight={600} width={1}><Trans>Discover</Trans></ItemTitle>
     </NavItem>
     </SidebarLink>
     <SidebarLink exact to={"/"}
    >
     <NavItem mb={3} alignItems={"center"}>
        <Image mr={2} borderRadius={4} height={36} width={36} src={MnetLogo} />
        <ItemTitle fontSize={2} fontWeight={600} width={1}><Trans>My MoodleNet</Trans></ItemTitle>
     </NavItem>
     </SidebarLink>
   </Nav>
   <Nav mt={3} pt={3} mb={2}>
     <SupText mb={3} fontSize={1}>Communities</SupText>
     {props.data.me.user.joinedCommunities.edges.map((c, i) => (
      <NavLink key={i} to={"/communities/" + c.node.localId}>
        <NavItem alignItems={"center"} mb={2}>
            <Image mr={2} borderRadius={4} height={36} width={36} src={c.node.icon} />
            <ItemTitle fontSize={1} fontWeight={600}>{c.node.name}</ItemTitle>
        </NavItem>
      </NavLink>
     ))}
   </Nav>
 </SidebarComponent>
)}

export default Sidebar