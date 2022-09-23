import React from 'react'

import { useTranslation } from 'react-i18next'

import SettingsForm from './forms/settings-form'

export default function Settings () {
  const { t } = useTranslation()

  return (
    <section className="px-2">
      <h2 className="text-2xl text-gray-900 font-semibold pt-3 pb-4">{t('Account.Settings')}</h2>
      <div className="p-6 bg-white border-gray-100 border-2 border-solid rounded-sm">
        <SettingsForm />
      </div>
    </section>
  )
}
