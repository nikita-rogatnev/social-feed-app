import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import Routes from './Routes';

const App = () => (
    <BrowserRouter>
        <main className="main">
            <header className="header">
                <h1 className="header__logo">Social Feed React App</h1>

                <nav className="header__navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes/>
        </main>
    </BrowserRouter>
);

export default App;
