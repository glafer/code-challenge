import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppHeader extends Component {

    render() {
        return <div>
                <Link to="/">
                    <h1>Code Challenge!</h1>
                </Link>
            </div>
    }
}

export default AppHeader;