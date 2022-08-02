import { FC } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

interface Props {
    locale: string
}

const Document: FC<Props> = ({locale}: Props) => {
    return (
        <Html dir={`${locale === 'fa' ? 'rtl' : 'ltr'}`}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="h-full w-full bg-gray-100 dark:bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export function getInitialProps ({locale}: {locale: string}) {
    return { locale: locale || 'fa' }
}

export default Document