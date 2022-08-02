import { FC, memo } from 'react'
import {useTranslation} from 'react-i18next'
import CommentSvg from '../../../global/svg/comment'

const ListComments: FC = () => {

    const {t} = useTranslation()

    return (
        <div className="flex flex-col justify-center items-center">
            <CommentSvg className="h-16 w-16 text-gray-300" />
            <div className="text-gray-400 text-lg mt-1">{t('responses.noComment')}</div>
        </div>
    )
}

export default memo(ListComments)