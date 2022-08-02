import { FC } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import LogoSvg from '../../../global/svg/logo'

const Brand: FC = () => {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = (): boolean => language === 'fa'

    return (
        <div className="flex items-center">
            <Link href="/">
                <a className={`flex items-center ${isLanguageFA() ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <LogoSvg className="h-9 w-9" />
                    <span className={`text-gray-500 dark:text-gray-200 font-semibold ${isLanguageFA() ? 'pl-6' : 'pr-6'} `}>{t('layout.appName')}</span>
                </a>
            </Link>
        </div>
    )
}

export default Brand