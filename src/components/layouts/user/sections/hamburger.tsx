import { FC, Dispatch, SetStateAction, memo } from 'react'
import { useTranslation } from 'react-i18next'
import DarkMode from './darkMode'

interface Props {
    isShowMenu: boolean,
    setIsShowMenu: any
}

const Hamburger: FC<Props> = ({isShowMenu, setIsShowMenu}) => {

    const {i18n: {language}} = useTranslation()

    return (
        <div className={`flex items-center lg:hidden ${language === 'fa' && 'space-x-reverse'} space-x-2`}>
            <div className="flex items-center">
                <DarkMode />
            </div>

            <button onClick={() => setIsShowMenu(!isShowMenu)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-200 hover:text-gray-500 bg-gray-200/70 dark:bg-gray-700 focus:outline-none transition">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path className={`${isShowMenu ? 'hidden' : 'inline-flex'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    <path className={`${isShowMenu ? 'inline-flex' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}

export default memo(Hamburger)