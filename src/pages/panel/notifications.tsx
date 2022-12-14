import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import PageWrap from '../../components/global/wraps/page'

const Notifications: NextPage & any = () => {

    const {t} = useTranslation()

    return (
        <PageWrap variant="panel">
            <Head>
                <title>{t('menu.notifications')}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <div className="text-gray-500 dark:text-gray-200">{t('menu.notifications')}</div>
        </PageWrap>
    )
}

Notifications.layout = 'panel'

export default Notifications