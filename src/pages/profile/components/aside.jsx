import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export default function Aside () {
  return (
    <aside className="hidden lg:block w-2/12 bg-white p-3 border-r-2 border-gray-100 border-solid">
      <ul className="flex flex-col">
        <li className="text-gray-600 font-medium hover:bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-sm">
          <Link to="/profile">Overview</Link>
        </li>
        <li className="text-gray-600 font-medium hover:bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-sm">
          <Link to="/profile/settings">Settings</Link>
        </li>
        <li className="text-gray-600 font-medium hover:bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-sm">
          <Link to="/profile/interested-jobs">My Jobs</Link>
        </li>
        <li className="text-gray-600 font-medium hover:bg-gray-50 hover:text-blue-500 px-3 py-2 rounded-sm">
          <Link to="/profile/security">security</Link>
        </li>
      </ul>
      <Outlet/>
    </aside>
  )
}
