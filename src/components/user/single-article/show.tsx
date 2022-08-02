import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { random, timestampToPersianDate } from '../../../modules/helperFunctions'
import { CalenderSvg, CommentSvg, LikeSvg, DisLikeSvg } from '../../global/svg'

interface Props {
    id: number,
    title: string,
    body: string,
    created_at: number,
}

const ShowArticle: FC<Props | any> = ({id, title, body, created_at}) => {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = () => language === 'fa'

    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl space-y-5 shadow-md">
            <div className="md:p-5"><img className="w-full md:rounded-xl" src={`https://picsum.photos/id/${random(160, 180)}/300/100`} /></div>
            <h1 className="text-gray-600 dark:text-gray-300 text-xl font-semibold px-4 md:px-5">{isLanguageFA() ? title : t('singleArticlePage.title')}</h1>
            <p className="text-gray-500 dark:text-gray-300 text-justify leading-[2.5rem] px-4 md:px-5">{isLanguageFA() ? body : t('singleArticlePage.body')}</p>
            <div className="flex flex-grow items-end justify-between text-gray-500 dark:text-gray-200 p-4 md:p-5">
                <div className={`flex items-center ${isLanguageFA() && 'space-x-reverse'} space-x-1`}>
                    <CalenderSvg className="h-6 w-6" />
                    <span className="mt-1">{timestampToPersianDate(created_at, language)}</span>
                </div>
                <div className={`flex ${isLanguageFA() && 'space-x-reverse'} space-x-3`}>
                    <div className="flex">
                        {id % 2 === 0 ? <LikeSvg className="h-6 w-6" /> : <DisLikeSvg className="h-6 w-6" />}
                        <span className="text-sm pt-[.12rem]">{Number('84').toLocaleString(language)}</span>
                    </div>
                    <div className="flex">
                        <CommentSvg className="h-6 w-6" />
                        <span className="text-sm pt-[.12rem]">{Number('15').toLocaleString(language)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ShowArticle)