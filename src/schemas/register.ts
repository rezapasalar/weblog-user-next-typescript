import { object, string, ref } from 'yup'
import { messages, transfer } from '.'
import { searchUserService } from '../services/users'

export const initialData = {
    is_admin: 0,
    name: '',
    family: '',
    day: '',
    month: '',
    year: '',
    email: '',
    password: '',
    passwordConfirmation: ''
}

export const registerSchema = (language: string = 'fa') => { 
    return object({
        name: 
            string()
            .required(transfer({rule: 'required', field: 'name', language}))
        ,family:
            string()
            .required(transfer({rule: 'required', field: 'family', language}))
        ,day: 
            string()
            .required(transfer({rule: 'required', field: 'day', language}))
        ,month: 
            string()
            .required(transfer({rule: 'required', field: 'month', language}))
        ,year: 
            string()
            .required(transfer({rule: 'required', field: 'year', language}))
        ,email:
            string()
            .required(transfer({rule: 'required', field: 'email', language}))
            .email(messages[language]['email'])
            .test({
                message: () => transfer({rule: 'duplicate', field: 'email', language}),
                test: async (email: any, {parent: {id}}) => {
                    const {data: {data}} = await searchUserService('email', email)
                    return data.length && data[0].id !== id ? false : true
                }
            })
        ,password:
            string()
            .required(transfer({rule: 'required', field: 'password', language}))
            .min(8, transfer({rule: 'min', field: 'password', value: 8, language}))
            .max(32, transfer({rule: 'max', field: 'password', value: 32, language}))
        ,passwordConfirmation:
            string()
            .oneOf([ref('password'), null], messages[language]['confirmed'])
    })
}