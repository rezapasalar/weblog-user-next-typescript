import { FC, memo } from 'react'
import { useRouter } from 'next/router'
import LogoSvg from '../../global/svg/logo'

interface Props {
    title: string
}

const TitleForm: FC<Props> = ({title}) => {

    const router = useRouter()

    return (
        <>
            <LogoSvg onClick={() => router.push('/')} className="h-16 w-16 mx-auto" />
            <h4 className="text-xl text-center text-gray-500/90 mb-7">{title}</h4>
        </>
    )
}

export default memo(TitleForm)