import { FC, memo } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

import Brand from '../../user/sections/brand'
import UserInfo from './userInfo'
import NavLink from './navLink'
import { HomeSvg, UserSvg, SettingSvg, LogoutSvg, CloseSvg } from '../../../global/svg'
import { getTheme } from '../../../../modules/helperFunctions'

interface Props {
    setIsShowSidebar: any
}

const Sidebar: FC<Props> = ({setIsShowSidebar}) => {

    const {t} = useTranslation()

    const logoutHandler = () => {
        localStorage.removeItem('isAuth')
        toast.success(t('responses.successfulLogout'), {...getTheme()})
    }

    return (
        <aside className="flex flex-col items-center min-h-screen lg:min-h-fit w-9/12 sm:w-5/12 lg:w-full bg-white dark:bg-gray-800 lg:rounded-xl px-4 py-7 md:p-7 space-y-4 md:space-y-8">
            <div className="flex justify-between lg:justify-center items-center w-full">
                <Brand />
                <CloseSvg onClick={() => setIsShowSidebar(false)} className="h-7 w-7 text-gray-300 dark:text-gray-500 cursor-pointer block lg:hidden" />
            </div>

            <UserInfo />
            
            <div className="w-full space-y-2">
                <NavLink href="/panel" label={t('menu.main')} icon={<HomeSvg />} onClick={() => setIsShowSidebar(false)} />
                <NavLink href="/panel/profile" label={t('menu.profile')} icon={<UserSvg />} onClick={() => setIsShowSidebar(false)} />
                <NavLink href="/panel/setting" label={t('menu.setting')} icon={<SettingSvg />} onClick={() => setIsShowSidebar(false)} />
                <NavLink href="/" label={t('menu.logout')} icon={<LogoutSvg />} onClick={logoutHandler} />
            </div>
        </aside>
    )
}

export default memo(Sidebar)