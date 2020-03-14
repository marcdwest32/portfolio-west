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
import { useAuth0 } from '../../react-auth0-spa';

const BsNavLink = props => {
  const { route, title } = props;

  return (
    <Link href={route}>
      <a className='nav-link port-navbar-link'>{title}</a>
    </Link>
  );
};

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <span
      className='nav-link port-navbar-link clickable'
      onClick={() => loginWithRedirect({})}
    >
      Login
    </span>
  );
};

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <span className='nav-link port-navbar-link' onClick={() => logout()}>
      Logout
    </span>
  );
};

const Example = props => {
  const { isAuthenticated } = useAuth0();
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
            {!isAuthenticated && (
              <NavItem className='port-navbar-item'>
                <Login />
              </NavItem>
            )}
            {isAuthenticated && (
              <NavItem className='port-navbar-item'>
                <Logout />
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
