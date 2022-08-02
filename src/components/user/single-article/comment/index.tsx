import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import CommentForm from './form'
import ListComments from './list'
import Button from '../../../global/elements/button'

const Comment: FC = () => {

    const [isShowForm, setIsShowForm] = useState<boolean>(false)

    const {t} = useTranslation()

    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl p-4 md:p-5 space-y-5 shadow-md mt-6">
            <div className="md:flex items-center justify-between space-y-3">
                <h4 className="text-gray-600 dark:text-gray-300 text-xl font-semibold">{t('singleArticlePage.comments')}</h4>
                <Button onClick={() => setIsShowForm(true)} className="w-full md:w-auto">+ {t('buttons.newComment')}</Button>
            </div>

            <CommentForm isShowForm={isShowForm} setIsShowForm={useCallback(setIsShowForm, [])} />
            <ListComments />
        </div>
    )
}

export default Comment