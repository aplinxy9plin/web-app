import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import {
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react';

import Logo from '../../assets/Logo.svg';

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  height: '70px',
};

const Navbar = ({ links }) => {
  const location = useLocation();
  // location.pathname = location.pathname === '/' ? '/map' : location.pathname;
  console.log(location.pathname);
  return (
    <Visibility
      once={false}
    >
      <Menu
        borderless
        // fixed="top"
        style={fixedMenuStyle}
        fluid
        widths={3}
        pointing
      >
        <Menu.Item position="left">
          <Link to="/map">
            <Image style={{ verticalAlign: 'lef' }} size="tiny" src={Logo} />
          </Link>
        </Menu.Item>
        <Menu.Item>
          {
            links && links.map((item) => (
              <Menu.Item
                key={item.link}
                href={item.link}
                as="a"
                style={item.link === location.pathname ? { color: 'green' } : null}
                active={item.link === location.pathname}
              >
                {item.name}
              </Menu.Item>
            ))
          }
        </Menu.Item>
        {
          localStorage.getItem('grofor_token')
            ? (
              <Menu.Item position="right">
                <Link to="/basket" style={{ marginRight: '25px' }}>Корзина</Link>
                <Link to="/profile">Профиль</Link>
              </Menu.Item>
            )
            : (
              <Menu.Item>
                <Link to="/basket" style={{ marginRight: '25px' }}>Корзина</Link>
                <Link to="/login">Войти</Link>
              </Menu.Item>
            )
        }
      </Menu>
    </Visibility>
  );
};


Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Navbar;
