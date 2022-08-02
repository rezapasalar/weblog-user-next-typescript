export const messages: any = {
    fa: {
        required: 'فیلد :attr الزامی است',
        integer: 'فیلد :attr باید عددی باشد',
        min: 'فیلد :attr نباید کمتر از :min حرف باشد',
        max: 'فیلد :attr نباید بیشتر از :max حرف باشد',
        email: 'فرمت ایمیل نامعتبر است',
        confirmed: 'رمز عبور باید با تایید رمز عبور مطابقت داشته باشد',
        duplicate: 'فیلد :attr تکراری است',
        length: 'طول :attr باید :length کاراکتر باشد'
    },
    en: {
        required: 'Field :attr is required',
        integer: 'Field :attr must be numeric',
        min: 'The field :attr should not be less than :min',
        max: 'The field :attr should not be more than :max',
        email: 'Invalid email format',
        confirmed: 'The password must match the password verification',
        duplicate: 'Field :attr is duplicate',
        length: 'Length :attr must be character :length'
    }
}

export const fields: any = {
    fa: {
        name: 'نام',
        family: 'فامیل',
        email: 'ایمیل',
        password: 'رمز عبور',
        password_confirmation: 'تایید رمز عبور',
        title: 'عنوان',
        body: 'متن',
        description: 'توضیحات',
        text: 'متن',
        code: 'کد ملی',
        mobile: 'شماره تلفن'
    },
    en: {
        name: 'name',
        family: 'family',
        email: 'email',
        password: 'password',
        password_confirmation: 'password confirmation',
        title: 'title',
        body: 'text',
        description: 'description',
        text: 'text',
        code: 'code',
        mobile: 'mobile number'
    }
}

export const transfer = ({rule, field, value = null, language = 'fa'}: any) => messages[language][rule].replace(':attr', fields[language][field]).replace(`:${rule}`, value)