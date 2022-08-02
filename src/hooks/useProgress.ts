import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function UseProgress (): {isAnimating: boolean} {

    const [isAnimating, setIsAnimating] = useState<boolean>(false)

    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeStart', () => setIsAnimating(true))
        router.events.on('routeChangeComplete', () => setIsAnimating(false))
        router.events.on('routeChangeError', () => setIsAnimating(false))
    }, [router])

    return {isAnimating}
}