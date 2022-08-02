import { useCallback, useState, Dispatch, SetStateAction } from 'react'

interface ResultHook {
    data: any,
    setData: Dispatch<SetStateAction<any>>,
    errors: any,
    setErrors: Dispatch<SetStateAction<any>>,
    mapYupErrors: (errors: any) => any,
    isSubmit: any,
    setIsSubmit: Dispatch<SetStateAction<any>>,
    inputHandler: any
}

export default function UseForm (initialData: any): ResultHook {
    
    const [data, setData] = useState<any>(initialData)

    const [errors, setErrors] = useState<any>({})

    const [isSubmit, setIsSubmit] = useState<any>('')

    const inputHandler = useCallback((key: string, value: string, type: string = 'string') => setData((prevState: any) => ({...prevState, [key]: type === 'number' ? Number(value) : value})), [data[Object.keys(data)]])

    const mapYupErrors = (errors: any): any => {
        let errorsObj = {}
        errors = errors.inner.map((err: any) => ({[err.path]: err.message}))
        errors.reverse().forEach((err: any) => errorsObj = {...errorsObj, ...err})
    
        return errorsObj
    }

    return {data, setData, errors, setErrors, mapYupErrors, isSubmit, setIsSubmit, inputHandler}
}