import { useTranslation } from 'react-i18next'
import { getCurrentPersianYear } from '../../../../modules/helperFunctions'

const Footer = () => {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = (): boolean => language === 'fa'

    return (
        <footer className="container-fluid bg-gray-50 dark:bg-gray-800 px-8 py-4 min-h-[60px]">
            <div className="max-w-screen-xl w-full mx-auto">
                <span className={`text-gray-500 dark:text-white ${isLanguageFA() && 'space-x-reverse'} space-x-2`}>
                    <span>{isLanguageFA() ? getCurrentPersianYear() : new Date(Date.now()).getFullYear()}</span>
                    <span>{t('layout.footer')}</span>
                </span>
            </div>
        </footer>
    )
}

export default Footer