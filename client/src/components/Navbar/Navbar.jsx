import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import { Menu, Image } from 'semantic-ui-react';
import icon from '../../../theming/images/icon.png'

let Navbar = () => {
  return (
    <Menu borderless pointing fixed='top' style={{ height: 50, boxShadow: 'none', border: 'none', marginTop: '10px', marginLeft: '10px'}}>
      <Menu.Item position="left">
        <NavLink to='/' activeClassName='active'>
          <Image src={icon} size='mini' />
        </NavLink>
      </Menu.Item>
    </Menu>
  )
}

module.exports = Navbar;