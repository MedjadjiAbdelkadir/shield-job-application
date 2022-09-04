import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className="h-16 z-40 bg-white shadow-sm text-gray-900 fixed top-0 w-full">
      <div className="flex justify-between items-center h-full px-4">
          <Link to="/" className="text-xl font-semibold">Shield</Link>
          <div className="flex items-center gap-2 pr-4">
            {/* avatar profile */}
            <span className="w-10 h-10 inline-block bg-gray-200 rounded-full"></span>
            <p className="text-xs text-gray-900 font-medium whitespace-pre-line w-10">Meziane Khalil</p>
          </div>
      </div>
    </nav>
  )
}
