import { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode,
    className?: string
}

const FooterCard: FC<Props> = ({children, className: classes = ''}) => {
    return (
        <div className={`flex flex-grow items-end justify-between p-3 text-gray-500 dark:text-gray-200 ${classes}`}>
            {children}
        </div>
    )
}

export default FooterCard