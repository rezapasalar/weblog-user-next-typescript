import { FC, memo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

interface Props {
    to?: string
}

const LoginRegister: FC<Props> = ({to = 'login'}) => {

    const router = useRouter()

    const {t, i18n: {language}} = useTranslation()

    return (
        <div className={`flex justify-center text-sm text-gray-400 text-center ${language === 'fa' && 'space-x-reverse'} space-x-1 mt-4`}>
            <span>{t('authPages.switch')}</span>
            <span onClick={() => router.push(`/auth/${to === 'login' ? 'login' : 'register'}`)} className="text-indigo-600 cursor-pointer">{t(`menu.${to}`)}</span>
        </div>
    )
}

export default memo(LoginRegister)