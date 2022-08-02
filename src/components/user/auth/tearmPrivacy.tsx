import { FC } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const TearmPrivacy: FC = () => {

    const {t, i18n: {language}} = useTranslation()

    return (
        <div className="flex justify-center text-xs text-gray-400 py-3">
            <span>{t('authPages.accept')}</span>
            <Link href="/terms"><a className="mx-1 text-indigo-600">{t('menu.terms')}</a></Link>
            <span>{t('authPages.and')}</span>
            <Link href="/privacy"><a className="mx-1 text-indigo-600">{t('menu.privacy')}</a></Link>
            <span>{language === 'fa' && 'است'}</span>
        </div>
    )
}

export default TearmPrivacy