import { FC, memo } from 'react'
import { useNProgress } from '@tanem/react-nprogress'

import Container from './container'
import Bar from './bar'

interface Props {
    isAnimating: boolean
}

const Progress: FC<Props> = ({isAnimating}) => {
    
    const {animationDuration, isFinished, progress} = useNProgress({isAnimating})

    return (
        <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress} />
        </Container>
    )
}

export default memo(Progress)