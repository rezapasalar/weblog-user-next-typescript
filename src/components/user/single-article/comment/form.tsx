import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../../../global/elements/button'
import TextAreaElement from '../../../global/elements/textarea'

interface Props {
    isShowForm: Boolean,
    setIsShowForm: any
}

const CommentForm: FC<Props> = ({isShowForm, setIsShowForm}) => {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = (): boolean => language === 'fa'

    return (
        <div className={`${isShowForm ? 'block' : 'hidden'} space-y-3`}>
            <TextAreaElement dir={isLanguageFA() ? 'rtl' : 'ltr'} value="" onChange={() => console.log('')} className="text-sm" placeholder={t('singleArticlePage.placeholder')} />
            <div className={`${isLanguageFA() ? 'text-left' : 'text-right'}`}>
                <Button onClick={() => setIsShowForm(false)} outline variant="secondary" size="md" className={`${isLanguageFA() ? 'ml-2' : 'mr-2'}`}>{t('buttons.cancel')}</Button>
                <Button size="md">{t('buttons.post')}</Button>
            </div>
        </div>
    )
}

export default memo(CommentForm)