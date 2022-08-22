import { object, string, number, ref } from 'yup'
import { UserFlex } from '../models/user'
import { t } from '../config/i18n'
import { getCurrentPersianYear } from '../modules/helperFunctions'
import { searchUserService } from '../services/users'

export const initialValues: UserFlex = {
    is_admin: 0,
    name: '',
    family: '',
    day: undefined,
    month: undefined,
    year: undefined,
    email: '',
    password: '',
    passwordConfirmation: ''
}

export const registerSchema = (language: string) => {

    const isLanguageFa: boolean = language === 'fa'
    const ADYear: number = new Date().getFullYear()

    return object({
        name: string().required(),
        family: string().required(),
        day: number().required().min(1).max(31),
        month: number().required().min(1).max(12),
        year: number().required().min(isLanguageFa ? getCurrentPersianYear('en') - 80 : ADYear - 80).max(isLanguageFa ? getCurrentPersianYear('en') : ADYear),
        email: string().required().email()
            .test({
                message: (): string => t('validation.messages.duplicate', {attribute: t('validation.attributes.email')}),
                test: async (email: any, ref: {parent: {id: number}}) => {
                    const {data: {data}} = await searchUserService('email', email)
                    return data.length && data[0].id !== ref.parent.id ? false : true
                }
            }),
        password: string().required().min(8).max(32),
        passwordConfirmation: string().required().oneOf([ref('password')])
    })
}