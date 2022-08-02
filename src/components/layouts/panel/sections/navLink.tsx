import { FC, ReactNode, memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
    href: any,
    label: String,
    icon: ReactNode,
    onClick?: any,
    className?: string
}

const NavLink: FC<Props> = ({href, label, icon, onClick = null, className: classes = ''}) => {

    const router = useRouter()

    return (
        <Link href={href}>
            <a onClick={onClick} className={`${router.pathname === href && '!bg-gray-100 dark:!bg-gray-700 rounded-xl'} text-gray-400 dark:text-gray-300 flex justify-between items-center duration-300 font-medium text-sm lg:text-base p-3 hover:bg-gray-200/20 dark:hover:bg-gray-700/20 hover:rounded-xl ${classes}`}>
                <span>{label}</span>
                <span className="h-7 w-7 opacity-60">{icon}</span>
            </a>
        </Link>
    )
}

export default memo(NavLink)