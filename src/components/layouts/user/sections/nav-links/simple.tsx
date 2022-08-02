import { FC, memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

interface Props {
    href: string,
    label: string,
    onClick: any
}

const SimpleNavLink: FC<Props> = ({href, label, onClick = null}) => {

    const router = useRouter()

    const {i18n: {language}} = useTranslation()

    return (
        <Link href={href}>
            <a onClick={onClick} className={`${router.pathname === href && '!border-indigo-700 bg-gray-200/50 dark:bg-gray-700/80'} block lg:inline-flex lg:items-center px-2 py-4 lg:py-1 ${language === 'fa' ? 'border-l-4' : 'border-r-4'} border-b-0 lg:border-l-0 lg:border-r-0 lg:border-b-2 border-transparent text-sm text-gray-500 dark:text-gray-200 hover:border-indigo-700/20 dark:hover:border-indigo-700/20 transition`}>
                {label}
            </a>
        </Link>
    )
}

export default memo(SimpleNavLink)