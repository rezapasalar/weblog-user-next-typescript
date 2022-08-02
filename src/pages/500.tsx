import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

import FullScreenCenter from '../components/global/wraps/fullScreenCenter'
import Button from '../components/global/elements/button'

const Custom500: NextPage & any = () => {

    const {t, i18n: {language}} = useTranslation()

    const router = useRouter()

    return (
        <>
            <Head>
                <title>{Number('404').toLocaleString(language)}: {t('errors.404')}</title>
            </Head>

            <FullScreenCenter>
                <div className={`flex items-center ${language === 'fa' && ' space-x-reverse divide-x-reverse'} space-x-4 divide-x-2 mb-4 select-none`}>
                    <h4 className="text-xl text-gray-500 dark:text-gray-100">{Number('500').toLocaleString(language)}</h4>
                    <p className="text-gray-400 px-4">{t('errors.500')}</p>
                </div>
                <Button size="md" onClick={() => router.push('/')}>{t('buttons.backToHome')}</Button>
            </FullScreenCenter>
        </>
    )
}

Custom500.layout = null

export default Custom500