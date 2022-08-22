import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '../lang/en'
import fa from '../lang/fa'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {en, fa},
        lng: 'fa',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export const t = i18n.t

export const language = i18n.language

export default i18n