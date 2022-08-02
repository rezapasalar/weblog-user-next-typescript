import { FC, memo } from 'react'
import LazyLoad from 'react-lazyload'

interface Props {
    src: string,
    alt?: string,
    onClick?: any,
    className?: string
}

const ImgCard: FC<Props> = ({src, alt = '', onClick = null, className: classes = ''}) => {
    return (
        <div className="relative md:rounded-t-lg overflow-hidden">
            <LazyLoad>
                <img onClick={onClick} src={src} alt={alt} className={`w-full h-52 object-cover hover:scale-110 transition cursor-pointer ${classes}`} />
            </LazyLoad>
        </div>
    )
}

export default memo(ImgCard)