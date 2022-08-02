import { FC, ReactNode, memo } from 'react'

interface Props {
    children: ReactNode,
    title?: string,
    spaceY?: string,
    px?: string
}

const WrapSidebar: FC<Props> = ({children, title = null, spaceY = 'on', px = 'on'}) => {
    return (
        <div className={`bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md py-8 ${px === 'on' && 'px-5'}`}>
            {title && <div className={`text-gray-500 dark:text-gray-100 text-xl font-bold pb-5 ${px !== 'on' && 'px-5'}`}>{title}</div>}
            <div className={`${spaceY === 'on' && 'space-y-5'}`}>
                {children}
            </div>
        </div>
    )
}

export default memo(WrapSidebar)