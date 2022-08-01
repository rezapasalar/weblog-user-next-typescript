import nc from 'next-connect'
import type { NextApiRequest, NextApiResponse } from 'next'

type Message = {
    message: string
}

const middleware = (req: NextApiRequest & Message, res: NextApiResponse, next: any): void => {
    req.message = 'Hello World'
    next()
}

export default nc()
    .use(middleware)
    .get((req: NextApiRequest & Message, res: NextApiResponse) => res.status(200).json({message: req.message}))