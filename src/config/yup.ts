import { setLocale } from 'yup'
import { t } from './i18n'

setLocale({
    mixed: {
        required: (ref: {path: string}) => t('validation.messages.required', {attribute: t(`validation.attributes.${ref.path}`)}),
        oneOf: (ref: {path: string}) => ref.path === 'passwordConfirmation' ? t('validation.messages.confirmed') : '',
        notType: (ref: {path: string}) => t('validation.messages.invalid', {attribute: t(`validation.attributes.${ref.path}`)}),
    },
    string: {
        email: t('validation.messages.email'),
        min: (ref: {path: string, min: any}) => t('validation.messages.minString', {attribute: t(`validation.attributes.${ref.path}`), min: ref.min}),
        max: (ref: {path: string, max: any}) => t('validation.messages.maxString', {attribute: t(`validation.attributes.${ref.path}`), max: ref.max}),
        length: (ref: {path: string, length: any}) => t('validation.messages.length', {attribute: t(`validation.attributes.${ref.path}`), length: ref.length}),
    },
    number: {
        min: (ref: {min: any}) => t('validation.messages.minNumber', {min: ref.min}),
        max: (ref: {max: any}) => t('validation.messages.maxNumber', {max: ref.max}),
    },
})