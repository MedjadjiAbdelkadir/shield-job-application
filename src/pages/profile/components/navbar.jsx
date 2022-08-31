import React from 'react'

export default function Navbar () {
  return (
    <nav className="h-16 bg-white shadow-sm text-gray-900 fixed top-0 w-full">
        <div className="flex justify-between items-center h-full px-4">
            <a href="#">logo</a>
            <ul className="flex gap-3">
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
            </ul>
        </div>
    </nav>
  )
}
