import React from 'react'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Container } from '@components/_index'

export default function Navbar ({ withBg, extraClasses }) {
  return (
    <nav className={`h-16 ${extraClasses && extraClasses} top-0 w-full z-20 ${withBg ? 'bg-white shadow-sm text-gray-900' : 'text-white'}`}>
        <Container extraClasses="h-full relative">
            <div className="flex justify-between align-middle items-center h-full">
                <Link to="/" className="text-xl font-semibold">Shield</Link>
                <ul className="flex gap-3">
                    <li>
                        <Link to="/login" className="rounded font-medium py-2 px-4">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="bg-blue-600 text-white rounded font-medium py-1 md:py-2 px-3 md:px-4">Register</Link>
                    </li>
                </ul>
            </div>
        </Container>
    </nav>
  )
}

Navbar.propTypes = {
  withBg: PropTypes.bool,
  extraClasses: PropTypes.string
}
