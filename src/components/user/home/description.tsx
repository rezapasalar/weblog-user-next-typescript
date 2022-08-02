import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import PageWrap from '../../global/wraps/page'

const Description: FC = () => {

    const {t} = useTranslation()

    return (
        <div className="bg-pattern-light dark:bg-pattern-dark bg-size-600 bg-gray-200 dark:bg-gray-800 mt-[3rem] h-72 mb-6">
            <PageWrap className="flex justify-center items-center h-full">
                <p className="text-2xl md:text-3xl text-center text-gray-500 dark:text-gray-100 px-10">{t('homePage.description')}</p>
            </PageWrap>
        </div>
    )
}

export default Description