import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import { Menu, Image } from 'semantic-ui-react';
import icon from '../../../theming/images/icon.png'

let Navbar = () => {
  return (
    <Menu borderless pointing fixed='top' style={{ height: 90, boxShadow: 'none', border: 'none', position: 'fixed' }}>
      <Menu.Item position="left">
        <NavLink to='/' activeClassName='active'>
          <Image src={icon} size='mini' style={{ margin: '30px 10px' }}/>
        </NavLink>
      </Menu.Item>
    </Menu>
  )
}

module.exports = Navbar;