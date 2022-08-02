import { FC, memo } from 'react'
import ArticleType from './type'
import ArticleCategory from './categories'

const Sidebar: FC = () => {
    return (
        <div className="space-y-6">
            <ArticleType />
            <ArticleCategory />
        </div>
    )
}

export default memo(Sidebar)