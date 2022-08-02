import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import SimpleNavLink from './nav-links/simple'

interface Props {
    isShowMenu: boolean,
    setIsShowMenu: any
}

const Navigation: FC<Props> = ({isShowMenu, setIsShowMenu}) => {

    const {t} = useTranslation()

    return (
        <div className={`${isShowMenu ? 'block' : 'hidden'} lg:flex lg:flex-wrap my-4 md:my-0 w-full min-h-[60px]`}>
            <SimpleNavLink href="/" label={t('menu.home')} onClick={() => setIsShowMenu(false)} />
            <SimpleNavLink href="/articles" label={t('menu.articles')} onClick={() => setIsShowMenu(false)} />
            <SimpleNavLink href="/about-us" label={t('menu.aboutUs')} onClick={() => setIsShowMenu(false)} />
            <SimpleNavLink href="/contact-us" label={t('menu.contactUs')} onClick={() => setIsShowMenu(false)} />

            <div className="block md:hidden">
                <SimpleNavLink href="/auth/register" label={t('menu.register')} onClick={() => setIsShowMenu(false)} />
                <SimpleNavLink href="/auth/login" label={t('menu.login')} onClick={() => setIsShowMenu(false)} />
                <SimpleNavLink href="/panel" label={t('menu.userPanel')} onClick={() => setIsShowMenu(false)} />
                <SimpleNavLink href="/panel/setting" label={t('menu.setting')} onClick={() => setIsShowMenu(false)} />
            </div>
        </div>
    )
}

export default memo(Navigation)