import { useState, useCallback, FC } from 'react'
import { useTranslation } from 'react-i18next'

import Brand from './brand'
import Navigation from './navigation'
import DarkMode from './darkMode'
import Hamburger from './hamburger'
import More from './more'
import LanguageSelector from './languageSelector'

const Navbar: FC = () => {

    const [isShowMenu, setIsShowMenu] = useState<boolean>(false)

    const changeIsShowMenu = useCallback((status: boolean) => setIsShowMenu(status), [])

    const {i18n: {language}} = useTranslation()

    return (
        <nav className="bg-gray-50 dark:bg-gray-800 py-2 lg:py-0">
            <div className="max-w-screen-xl w-full mx-auto px-4 md:px-6">
                <div className="lg:flex justify-between">
                    <div className="flex justify-between">
                        <Brand />
                        <Hamburger isShowMenu={isShowMenu} setIsShowMenu={changeIsShowMenu} />
                    </div>

                    <div className="flex justify-between lg:flex-grow">
                        <Navigation isShowMenu={isShowMenu} setIsShowMenu={changeIsShowMenu} />

                        <div className={`hidden lg:flex justif items-center ${language === 'fa' && 'space-x-reverse'} space-x-2`}>
                            <LanguageSelector />
                            <DarkMode />
                            <More />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar