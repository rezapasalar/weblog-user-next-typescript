import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Sidebar, CheckboxItemSidebar } from '../../../global/sidebar'

const ArticleCategory: FC = () => {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = (): boolean => language === 'fa'

    return (
        <Sidebar title={t('articlesPage.articleCategory')}>
            <CheckboxItemSidebar>{isLanguageFA() ? 'لاراول' : 'Laravel'}</CheckboxItemSidebar>
            <CheckboxItemSidebar>{isLanguageFA() ? 'دارت' : 'Dart'}</CheckboxItemSidebar>
            <CheckboxItemSidebar>{isLanguageFA() ? 'جاوااسکریپت' : 'Javascript'}</CheckboxItemSidebar>
            <CheckboxItemSidebar>{isLanguageFA() ? 'اندروید' : 'Android'}</CheckboxItemSidebar>
            <CheckboxItemSidebar>{isLanguageFA() ? 'پایتون' : 'Python'}</CheckboxItemSidebar>
            <CheckboxItemSidebar>{isLanguageFA() ? 'پایگاه داده' : 'Database'}</CheckboxItemSidebar>
            <CheckboxItemSidebar>{isLanguageFA() ? 'جاوا' : 'Java'}</CheckboxItemSidebar>
        </Sidebar>
    )
}

export default ArticleCategory