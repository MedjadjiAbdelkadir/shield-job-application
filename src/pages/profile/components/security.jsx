import React from 'react'

import { useTranslation } from 'react-i18next'

export default function Security () {
  const { t } = useTranslation()
  return (
    <section className="px-2">
      <h2 className="text-2xl text-gray-900 font-semibold pt-3 pb-4">{t('Account.Security')}</h2>
      <div className="p-6 bg-white border-gray-100 border-2 border-solid rounded-sm divide-y divide-gray-200">
        <div className="flex justify-between items-center pb-4">
          <div>
            <h3 className="text-gray-900 font-medium mb-1">{t('Email')}</h3>
            <p className="text-gray-700 text-md">khalil@gmail.com</p>
          </div>
          <button className="text-gray-600 bg-gray-100 font-medium py-2 px-4 rounded-sm capitalize">{t('Change.Email')}</button>
        </div>
        <div className="flex justify-between items-center pt-4">
          <div>
            <h3 className="text-gray-900 font-medium mb-1">{t('Password')}</h3>
            <p className="text-gray-700 text-md">**********</p>
          </div>
          <button className="text-gray-600 bg-gray-100 font-medium py-2 px-4 rounded-sm capitalize">{t('Reset.Password')}</button>
        </div>
      </div>
    </section>
  )
}
