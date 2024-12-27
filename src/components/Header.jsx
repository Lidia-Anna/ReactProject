import React from 'react';

class Header extends React.Component {
    render() {
        return (
                <header className="bg-dark p-3">
                    <nav className="navbar">
                        <div className="container d-flex justify-content-between">
                            <a className="navbar-brand text-light" href="#">
                                Logo
                            </a>
                            <ul className="navbar-nav d-flex flex-row">
                                <li className="nav-item p-2">
                                    <a className="nav-link active text-light" href="#">Home</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className="nav-link text-light" href="#">About</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className="nav-link text-light" href="#">Services</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a className="nav-link text-light" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
        )
    }
}

export default Header;