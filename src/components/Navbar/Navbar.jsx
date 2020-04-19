import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Navbar = ({ links }) => (
  <nav>
    <ul>
      {
        links.map((item) => 
          <li>
            <Link to={item.link}>{item.name}</Link>
          </li>
        )
      }
    </ul>
  </nav>
);

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,   
};

export default Navbar;
