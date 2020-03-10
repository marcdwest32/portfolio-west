import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Link from 'next/link';

const BsNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </Link>
  );
};

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className='port-navbar port-default absolute'
        color='transparent'
        // light
        dark
        expand='md'
      >
        <NavbarBrand className='port-navbar-brand' href='/'>
          Marc West
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/' title='Home' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/about' title='About' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/portfolios' title='Portfolios' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/blogs' title='Blogs' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/cv' title='CV' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <NavLink
                href='https://github.com/marcdwest32'
                target='_blank'
                className='nav-link port-navbar-link'
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
