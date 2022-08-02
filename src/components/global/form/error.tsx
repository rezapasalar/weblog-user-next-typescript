import { FC, memo } from 'react'

interface Props {
    message: string
}

const ErrorElement: FC<Props> = ({message}) => {
    return <small className="text-red-500">{message}</small>
}

export default memo(ErrorElement)