import { memo } from 'react'
import { FC, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
    title: string,
    num: string,
    icon: ReactNode
}

const Box: FC<Props> = ({title, num, icon}) => {

    const {t, i18n: {language}} = useTranslation()

    return (
        <div className="flex justify-between items-center text-gray-400 bg-gray-100 dark:bg-gray-900 border dark:border-0 border-gray-200 px-3 py-5 rounded-lg">
            <div>
                <div className="text-lg font-semibold mb-2">{t(`panel.mainPage.${title}`)}</div>
                <div className="text-gray-500 dark:text-gray-200 text-center text-2xl font-bold">{Number(num).toLocaleString(language)}</div>
            </div>
            {icon}
        </div>
    )
}

export default memo(Box)