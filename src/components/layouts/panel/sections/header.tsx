import { FC, memo } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { HamburgerSvg, HomeSvg } from '../../../global/svg'
import DarkMode from '../../user/sections/darkMode'
import Notification from '../../user/sections/notification'
import { convertDateToPersianDate } from '../../../../modules/helperFunctions'
import LanguageSelector from '../../user/sections/languageSelector'

interface Props {
    setIsShowSidebar: any
}

const Header: FC<Props> = ({setIsShowSidebar}) => {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = (): boolean => language === 'fa'

    return (
        <header className="flex justify-between items-center md:rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md">
            <div className="flex items-center">
                <HamburgerSvg onClick={() => setIsShowSidebar((prevState: boolean) => !prevState)} className={`h-7 w-7 text-gray-500 dark:text-gray-200 block lg:hidden cursor-pointer ${isLanguageFA() ? 'ml-2' : 'mr-2'}`} />
                <span className="text-gray-400 text-sm">
                    <div>{convertDateToPersianDate(Date.now(), language)}</div>
                    <div className="text-gray-400/60 text-xs">{t('panel.welcome')}</div>
                </span>
            </div>
            <div className={`flex ${isLanguageFA() && 'space-x-reverse'} space-x-3`}>
                <LanguageSelector />
                <Notification count={24} />
                <Link href="/"><a><HomeSvg className="h-6 w-6 text-gray-500 dark:text-gray-200 cursor-pointer" /></a></Link>
                <DarkMode />
            </div>
        </header>
    )
}

export default memo(Header)