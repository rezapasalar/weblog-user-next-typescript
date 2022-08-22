import * as Yup from 'yup'

export const initialValues: {email: string, password: string} = {
    email: 'mitra@yahoo.com',
    password: '11111111'
}

export const loginSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(32)
})