import { FC, memo } from 'react'
import Box from "./box"
import { StarSvg, DollarSvg, TodoSvg } from '../../../global/svg'

const Statistics: FC = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            <Box title="inventory" num="1255" icon={<DollarSvg className="w-8 h-8 text-green-600" />} />
            <Box title="score" num="3781" icon={<StarSvg className="w-8 h-8 text-yellow-300" />} />
            <Box title="todos" num="1302" icon={<TodoSvg className="w-8 h-8 text-purple-600" />} />
        </div>
    )
}

export default memo(Statistics)