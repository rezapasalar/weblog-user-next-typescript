import { FC, ReactNode, memo } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
    children: ReactNode
}

const CheckboxItemSidebar: FC<Props> = ({children}) => {

    const {i18n: {language}} = useTranslation()

    return (
        <div className="flex items-center">
            <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${language === 'fa' ? 'ml-3' : 'mr-3'}`}></div>
            <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">
                {children}
            </label>
        </div>
    )
}

export default memo(CheckboxItemSidebar)