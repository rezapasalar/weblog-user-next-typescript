import { FC, ReactNode, memo } from 'react'

interface Props {
    children?: ReactNode,
    text: string,
    onClick?: any,
    className?: string
}

const BodyCard: FC<Props> = ({children, text, onClick = null, className: classes = ''}) => {
    return (
        <div onClick={onClick} className={`flex text-md font-bold px-3 text-gray-400 h-34 text-justify text-sm leading-7 cursor-pointer ${classes}`}>
            {text || children}
        </div>
    )
}

export default memo(BodyCard)