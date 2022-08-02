import { object, string } from 'yup'
import { messages, transfer } from '.'
import { searchUserService } from '../services/users'

export const initialData = {
    is_admin: 0,
    name: '',
    family: '',
    day: '',
    month: '',
    year: '',
    code: '',
    mobile: '',
    email: '', 
}

export const profileSchema = (language: string = 'fa') => { 
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
        ,code:
            string()
            .required(transfer({rule: 'required', field: 'code', language}))
            .length(10, transfer({rule: 'length', field: 'code', value: 10, language}))
        ,mobile:
            string()
            .required(transfer({rule: 'required', field: 'mobile', language}))
            .length(11, transfer({rule: 'length', field: 'mobile', value: 11, language}))
        ,email:
            string()
            .required(transfer({rule: 'required', field: 'email', language}))
            .email(messages[language]['email'])
            .test({
                message: () => transfer({rule: 'duplicate', field: 'email', language}),
                test: async (email: any, {parent: {id}}) => {
                    const {data: {data}}: any = await searchUserService('email', email)
                    return data.length && data[0].id !== id ? false : true
                }
            })
    })
}