import { FC, ReactNode } from 'react'

interface Props {
    animationDuration: number,
    children: ReactNode,
    isFinished: boolean
}

const Container: FC<Props> = ({animationDuration, children, isFinished}) => {
    return (
        <div 
            className="pointer-events-none"
            style={{
                opacity: isFinished ? 0 : 1,
                transition: `opacity ${animationDuration}ms linear`
            }}
        >
            {children}
        </div>
    )
}

export default Container 