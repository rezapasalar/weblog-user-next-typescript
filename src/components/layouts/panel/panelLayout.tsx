import { FC, ReactNode, useRef, useState, useCallback } from 'react'

import Sidebar from './sections/sidebar'
import Header from './sections/header'

interface Props {
    children: ReactNode
}

const PanelLayout: FC<Props> = ({children}) => {

    const [isShowSidebar, setIsShowSidebar] = useState(false)

    const changeIsShowSidebar = useCallback(setIsShowSidebar, [])

    const sidebarRef = useRef(null)

    const clickOutsideHandler = (e: any) => (sidebarRef.current === e.target) && setIsShowSidebar(false)

    return (
        <div className="max-w-screen-xl w-full mx-auto md:px-5 my-0 md:my-10 h-full">
            <div className="grid grid-cols-12 lg:gap-6 h-full">
                <div className={`${!isShowSidebar && 'hidden'} fixed inset-0 lg:col-span-3 lg:relative lg:inline-block lg:rounded-xl overflow-auto z-[70]`}>
                    <div onClick={clickOutsideHandler} ref={sidebarRef}>
                        <Sidebar setIsShowSidebar={changeIsShowSidebar} />
                    </div>
                </div>

                <div className={`${!isShowSidebar && 'hidden'} fixed inset-0 z-10 bg-gray-500/50 dark:bg-gray-900/50 lg:hidden`}></div>

                <div className="lg:col-span-9 col-span-12 space-y-6">
                    <Header setIsShowSidebar={changeIsShowSidebar} />
                    <main className="overflow-hidden md:rounded-xl bg-white dark:bg-gray-800 p-5 md:p-6 shadow-md">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default PanelLayout