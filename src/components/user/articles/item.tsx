import { FC, memo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { timestampToPersianDate, random } from '../../../modules/helperFunctions'
import { Card, ImgCard, TitleCard, BodyCard, FooterCard } from '../../global/card'
import { CommentSvg, LikeSvg, DisLikeSvg, CalenderSvg } from '../../global/svg'

interface Props {
    id: number,
    title: string,
    description: string,
    slug: string,
    created_at: number
}

const ItemArticles: FC<Props> = ({id, title, description, slug, created_at}) => {

    const router = useRouter()

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = (): boolean => language === 'fa'

    const showArticleHandler = useCallback(() => router.push(`/articles/${slug}`), [])

    return (
        <Card>
            <ImgCard onClick={showArticleHandler} src={`https://picsum.photos/id/${random(160, 180)}/200/300`} />
            
            <TitleCard onClick={showArticleHandler} text={isLanguageFA() ? title : t('articlesPage.title')} />

            <BodyCard text={isLanguageFA() ? description : t('articlesPage.description')} />

            <FooterCard>
                <div className={`flex items-center ${isLanguageFA() && 'space-x-reverse'} space-x-1`}>
                    <CalenderSvg className="h-5 w-5" />
                    <small className="mt-1">{timestampToPersianDate(created_at, language)}</small>
                </div>

                <div className={`flex ${isLanguageFA() && 'space-x-reverse'} space-x-2`}>
                    <div className="flex">
                        {id % 2 === 0 ? <LikeSvg className="h-5 w-5" /> : <DisLikeSvg className="h-5 w-5" />}
                        <span className="text-sm pt-[.12rem]">{Number('84').toLocaleString(language)}</span>
                    </div>

                    <div className="flex">
                        <CommentSvg className="h-5 w-5" />
                        <span className="text-sm pt-[.12rem]">{Number('15').toLocaleString(language)}</span>
                    </div>
                </div>
            </FooterCard>
        </Card>
    )
}

export default memo(ItemArticles)