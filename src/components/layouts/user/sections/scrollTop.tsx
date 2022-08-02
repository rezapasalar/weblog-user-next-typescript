import { useState, useEffect, FC } from 'react'
import ArrowTopSvg from '../../../global/svg/arrowTop'

const ScrollTop: FC = () => {

    const [isShow, setIsShow] = useState(false)

    useEffect(() => window.addEventListener('scroll', () => window.pageYOffset > 500 ? setIsShow(true) : setIsShow(false)), [])

    const scrollTopHandler = () => window.scrollTo({top:0, behavior: 'smooth'})

    return (
        <div onClick={scrollTopHandler} className={`${isShow ? 'block' : 'hidden'} fixed bottom-4 right-4 md:bottom-10 md:right-12 p-3 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-500/40 shadow-md text-gray-400 dark:text-gray-300 z-50`}>
            <ArrowTopSvg className="h-5 w-5" />
        </div>
    )
}

export default ScrollTop