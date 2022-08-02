import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const FullElementLoading: FC = () => {

    const {t} = useTranslation()

    return (
        <div className="absolute inset-0 bg-gray-500/50 dark:bg-gray-900/50 flex justify-center animate-slow-100">
            <div className="flex items-center space-x-reverse space-x-3 p-6 mt-28 h-fit rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-100">
                <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
                </span>
                <span>{t('responses.pleaseWait')}</span>
            </div>
        </div>
    )
}

export default FullElementLoading