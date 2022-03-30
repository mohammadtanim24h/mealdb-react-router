import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link className='text-decoration-none me-3 fs-5 text-danger' to="/">Home</Link>
            <Link className='text-decoration-none me-3 fs-5 text-danger' to='/meals'>Meals</Link>
            <Link className='text-decoration-none me-3 fs-5 text-danger' to='/about'>About</Link>
            <Link className='text-decoration-none me-3 fs-5 text-danger' to='contact'>Contact</Link>
        </div>
    );
};

export default Header;