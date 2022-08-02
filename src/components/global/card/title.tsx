import { FC, memo } from 'react'

interface Props {
    text: string,
    onClick: any,
    className?: string
}

const TitleCard: FC<Props> = ({text, onClick = null, className: classes = ''}) => {
    return (
        <div onClick={onClick} className={`flex text-md font-bold px-3 text-gray-500 dark:text-gray-200 cursor-pointer ${classes}`}>
            {text}
        </div>
    )
}

export default memo(TitleCard)