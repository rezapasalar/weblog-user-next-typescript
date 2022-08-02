import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Sidebar, SimpleItemSidebar } from '../../../global/sidebar'

const RecentArticles: FC = () => {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = () => language === 'fa'

    return (
        <Sidebar title={t('singleArticlePage.recentArticles')} spaceY="off" px="off">
            <SimpleItemSidebar>{isLanguageFA() ? 'صفحه‌آرایی و طراحی گرافیک' : 'Page layout and graphic design'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'صفحه‌بندی را به پایان برند' : 'Finish pagination'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'تا از نظر گرافیکی نشانگر' : 'Graphically markers'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'آزمایشی و بی‌معنی در صنعت' : 'Experimental and meaningless in the industry'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'از آنجایی که طراحان عموما' : 'Since designers generally'}</SimpleItemSidebar>
        </Sidebar>
    )
}

export default RecentArticles