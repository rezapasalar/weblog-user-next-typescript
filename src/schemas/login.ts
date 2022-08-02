import { object, string } from 'yup'
import { messages, transfer } from '.'

export const initialData = {
    email: 'mitra@yahoo.com',
    password: '11111111'
}

export const loginSchema = (language: string = 'fa') => { 
    return object({
        email:
            string()
            .required(transfer({rule: 'required', field: 'email', language}))
            .email(messages[language]['email'])
        ,password:
            string()
            .required(transfer({rule: 'required', field: 'password', language}))
            .min(8, transfer({rule: 'min', field: 'password', value: 8, language}))
            .max(32, transfer({rule: 'max', field: 'password', value: 32, language}))
    })
}