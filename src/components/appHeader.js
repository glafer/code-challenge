import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main-styles.css';

class AppHeader extends Component {

    render() {
        return <header className="main-header">
                <Link to="/">
                    <h1>Code Challenge!</h1>
                </Link>
            </header>
    }
}

export default AppHeader;