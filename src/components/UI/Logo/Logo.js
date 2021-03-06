import React from 'react';

import Logo from '../../../assets/breaking-bad-logo.png';

import './Logo.css';

/**
 * Logo shown in the application's header
 *
 * @param {*} props
 */
const logo = (props) => <img className='logo' src={Logo} alt='Breaking Bad' />;

export default logo;
