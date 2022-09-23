import React from 'react'

import i18next from 'i18next'
import cookies from 'js-cookie'

export default function SelectLanguage () {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  return (
    <select className="ml-4 bg-white rounded-sm border-2 border-solid border-gray-50 border-md text-lg w-12 text-gray-900">
      <option selected={currentLanguageCode === 'en' && true} value="en" onClick={() => i18next.changeLanguage('en')}>En</option>
      <option selected={currentLanguageCode === 'fr' && true} value="fr" onClick={() => i18next.changeLanguage('fr')}>Fr</option>
    </select>
  )
}
