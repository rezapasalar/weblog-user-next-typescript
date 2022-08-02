import { FC, ReactNode, memo } from 'react'

interface Props {
    children: ReactNode,
    className?: string
}

const SimpleItemSidebar: FC<Props> = ({children, className: classes = ''}) => {
    return (
        <div className={`odd:bg-gray-50 even:bg-white dark:even:bg-gray-900/20 dark:odd:bg-gray-900/40 hover:bg-gray-100 dark:hover:bg-gray-900/50 py-3 px-5 ${classes}`}>
            <p className="text-gray-400 text-sm font-medium cursor-pointer">{children}</p>
        </div>
    )
}

export default memo(SimpleItemSidebar)