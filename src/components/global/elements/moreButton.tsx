import { FC, memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from '../../../store'
import SimpleLoading from '../loadings/simple'

interface Props {
    label: string,
    isStill: boolean,
    onClick: any
}

const MoreButton: FC<Props> = ({label, isStill, onClick}) => {

    const {is_loading} = useSelector((state: RootState) => state.global)

    const {i18n: {language}} = useTranslation()

    return (
        <>
            {
                isStill &&
                    <div className="flex justify-center text-gray-500 dark:text-gray-200 pt-6">
                        <button className={`flex justify-center items-center ${language === 'fa' && 'space-x-reverse'} space-x-2`} onClick={onClick}>
                            {is_loading && <SimpleLoading />}
                            <span>{label}</span>
                        </button>
                    </div>
            }
        </>
    )
}

export default memo(MoreButton)