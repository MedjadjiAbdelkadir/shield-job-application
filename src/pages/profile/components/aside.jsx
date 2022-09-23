import React from 'react'

import { NavLink, useMatch } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Aside () {
  const isActiveLink = (location) => {
    return useMatch(location)
  }
  const { t } = useTranslation()
  return (
    <aside className="hidden lg:block lg:w-3/12 xl:w-2/10 bg-white p-3 border-r-2 border-gray-100 border-solid sticky top-16 h-screen z-20">
      <ul className="flex flex-col">
        <li>
          <NavLink
            className={isActiveLink('/profile') ? 'bg-gray-50 text-blue-500 px-3 py-2 w-full block font-medium' : 'text-gray-600 px-3 py-2 w-full block font-medium hover:bg-gray-50 hover:text-blue-500'}
            to="/profile">{t('Profile.Overview')}</NavLink>
        </li>
        <li>
          <NavLink className={isActiveLink('/profile/settings') ? 'bg-gray-50 text-blue-500 px-3 py-2 w-full block font-medium' : 'text-gray-600 px-3 py-2 w-full block font-medium hover:bg-gray-50 hover:text-blue-500'} to="/profile/settings">{t('Profile.Settings')}</NavLink>
        </li>
        <li>
          <NavLink className={isActiveLink('/profile/interested-jobs') ? 'bg-gray-50 text-blue-500 px-3 py-2 w-full block font-medium' : 'text-gray-600 px-3 py-2 w-full block font-medium hover:bg-gray-50 hover:text-blue-500'} to="/profile/interested-jobs">{t('Profile.MyJobs')}</NavLink>
        </li>
        <li>
          <NavLink className={isActiveLink('/profile/security') ? 'bg-gray-50 text-blue-500 px-3 py-2 w-full block font-medium' : 'text-gray-600 px-3 py-2 w-full block font-medium hover:bg-gray-50 hover:text-blue-500'} to="/profile/security">{t('Profile.Security')}</NavLink>
        </li>
      </ul>
    </aside>
  )
}
