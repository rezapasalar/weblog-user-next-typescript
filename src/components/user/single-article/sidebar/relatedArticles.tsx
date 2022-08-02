import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Sidebar, SimpleItemSidebar } from '../../../global/sidebar'

const RelatedArticles: FC = () => {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = (): boolean => language === 'fa'

    return (
        <Sidebar title={t('singleArticlePage.relatedArticles')} spaceY="off" px="off">
            <SimpleItemSidebar>{isLanguageFA() ? 'سفارش گرفته شده استفاده' : 'Order taken use'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'حق تکثیر متون را ندارند و' : 'They do not have the right to reproduce texts and'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'تا از نظر گرافیکی نشانگر' : 'Graphically markers'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'طراح گرافیک از این متن' : 'Graphic designer of this text'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'حق تکثیر متون را ندارند' : 'They do not have the right to reproduce texts'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'ظاهر متن باشد. معمولا طراحان' : 'The appearance of the text'}</SimpleItemSidebar>
            <SimpleItemSidebar>{isLanguageFA() ? 'با استفاده از محتویات ساختگی' : 'Using fake content'}</SimpleItemSidebar>
        </Sidebar>
    )
}

export default RelatedArticles