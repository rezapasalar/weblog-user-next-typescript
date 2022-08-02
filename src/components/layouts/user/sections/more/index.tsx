import dynamic from 'next/dynamic'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import MoreSvg from '../../../../global/svg/more'
const MoreList = dynamic(() => import('./list'), {suspense: false})

const More: FC = () => {
    
    const [isShow, setIsShow] = useState<boolean>(false)

    const changeIsShow = useCallback((status: boolean) => setIsShow(status), [])

    const moreRef = useRef<any>(null)

    const {i18n: {language}} = useTranslation()

    const clickOutsideHandler = ({target}: any) => moreRef.current && !moreRef.current.contains(target) && setIsShow(false)

    useEffect(() => {
        document.addEventListener("mousedown", clickOutsideHandler)
        window.addEventListener("scroll", clickOutsideHandler)
        return () => {
            document.removeEventListener("mousedown", clickOutsideHandler)
            window.removeEventListener("scroll", clickOutsideHandler)
        }
    }, [])

    return (
        <div ref={moreRef} className="relative z-50">

            <MoreSvg onClick={() => setIsShow(!isShow)} className={`${language === 'fa' ? '-ml-2' : '-mr-2'} h-[1.4rem] w-[1.4rem] text-gray-500 dark:text-gray-100 cursor-pointer`} />

            <div onClick={() => setIsShow(false)} className={`${isShow ? 'block' : 'hidden'} fixed inset-0 top-[60px] animate-slow-200  bg-gray-500/50 dark:bg-gray-900/50`}></div>

            {isShow && <MoreList setIsShow={changeIsShow} />}
            
        </div>
    )
}

export default More