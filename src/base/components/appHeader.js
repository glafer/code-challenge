import React from 'react'
import { Link } from 'react-router-dom'

export const AppHeader = () => (
    <header className="main-header">
        <Link to="/">
            <h1>Code Challenge!</h1>
        </Link>
    </header>
)