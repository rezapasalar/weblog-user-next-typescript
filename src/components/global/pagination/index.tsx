import { FC, memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { usePagination, DOTS } from './usePagination'

interface Props {
    onPageChange: any,
    totalCount: number,
    siblingCount?: number,
    currentPage: any,
    pageSize: number,
    filter?: string
}


const Pagination: FC<Props> = ({onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, filter = 'all'}) => {

    const paginationRange: any = usePagination({currentPage, totalCount, siblingCount, pageSize})

    const [, setSearchParams] = useSearchParams()

    const {t, i18n: {language}} = useTranslation()

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) return null

    const pageChangeHandler = (page: any) => {
        setSearchParams({page, filter})
        onPageChange(page)
    }

    const onNext = () => pageChangeHandler(currentPage + 1)

    const onPrevious = () => pageChangeHandler(currentPage - 1)

    const hasPrevious = currentPage > 1

    const lastPage: any[] = paginationRange[paginationRange.length - 1]

    const hasNext = currentPage < lastPage

    return (
        <ul className="flex items-center justify-between md:justify-start mt-8 mb-4 select-none">

            {/* Left navigation arrow */}
            <li onClick={() => hasPrevious && onPrevious()} className={`${hasPrevious ? 'cursor-pointer hover:bg-gray-400 hover:text-white hover:dark:bg-gray-500' : 'cursor-default opacity-40'} text-gray-600 dark:text-gray-100 px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-md ml-1 select-none duration-300`}>
                {t('pagination.previous')}
            </li>

            {
                paginationRange.map((pageNumber: any, index: any) => {
                
                    // If the pageItem is a DOT, render the DOTS unicode character
                    if (pageNumber === DOTS) {
                        return <li key={index} className="px-3 text-gray-600 dark:text-gray-100 hidden md:block select-none">. . .</li>
                    }
                    
                    // Render our Page Pills
                    return (
                        <li key={index} onClick={() => pageChangeHandler(pageNumber)} className={`${pageNumber === currentPage && '!bg-indigo-700 !text-white select-none'} px-4 py-2 text-gray-600 dark:text-gray-100 mx-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 hover:text-white hover:dark:bg-gray-500 rounded-md hidden md:block select-none cursor-pointer duration-300`}>
                            {pageNumber.toLocaleString(language)}
                        </li>
                    )
                })
            }

            {/*  Right Navigation arrow */}
            <li onClick={() => hasNext && onNext()} className={`${hasNext ? 'cursor-pointer hover:bg-gray-400 hover:text-white hover:dark:bg-gray-500' : 'cursor-default opacity-40'} text-gray-600 dark:text-gray-100 px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-md mr-1 select-none duration-300`}>
                {t('pagination.next')}
            </li>
        </ul>
    )
}

export default memo(Pagination)