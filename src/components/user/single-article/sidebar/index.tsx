import { FC, memo } from 'react'
import RelatedArticles from './relatedArticles'
import RecentArticles from './recentArticles'

const Sidebar: FC = () => {
    return (
        <div className="space-y-6">
            <RelatedArticles />
            <RecentArticles />
        </div>
    )
}

export default memo(Sidebar)