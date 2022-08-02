import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { RootState } from '../../../store'

import ItemArticles from './item'
import SimpleLoading from '../../global/loadings/simple'
import Alert from '../../global/elements/alert'
import RefreshSvg from '../../global/svg/refresh'

const ListArticles: FC = () => {

    const {articles} = useSelector((state: RootState) => state.articles)

    const {is_loading} = useSelector((state: RootState) => state.global)

    const router = useRouter()

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = (): boolean => language === 'fa'

    return (
        <>
            <div className="grid lg:grid-cols-24 grid-cols-12 gap-6">
                {articles.map(article => <ItemArticles key={article.id} {...article} />)}
            </div>
            
            {!articles.length &&
                <Alert>
                    {is_loading 
                        ? 
                            <div className={`flex items-center ${isLanguageFA() && 'space-x-reverse'} space-x-2`}><SimpleLoading /><span>{t('responses.receivingInfo')}</span></div> 
                        :   
                            <div className={`flex ${isLanguageFA() && 'space-x-reverse'} space-x-2`}>
                                <span>{t('responses.emptyData')}</span>
                                <RefreshSvg onClick={() => router.reload()} className="h-6 w-6 text-indigo-500 cursor-pointer" />
                            </div>
                    }
                </Alert> 
            }
        </>
    )
}

export default ListArticles