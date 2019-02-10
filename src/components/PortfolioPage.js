import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h2>Projects</h2>
        <p>
            List of projects here ...
        </p>
        <ol>
            <li><Link to='/portfolio/100'>Project 100</Link></li>
            <li><Link to='/portfolio/200'>Project 200</Link></li>
            <li><Link to='/portfolio/300'>Project 300</Link></li>
        </ol>
    </div>
);

export default PortfolioPage;