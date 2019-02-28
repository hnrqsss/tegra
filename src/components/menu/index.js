import React from 'react'

import { Nav, Img } from './style'

const logo = 'images/logo.png'

const Menu = () => {

  return (
    <Nav>
      <Img src={logo} alt='logo Tegra' />
    </Nav>
  )
}

export default Menu