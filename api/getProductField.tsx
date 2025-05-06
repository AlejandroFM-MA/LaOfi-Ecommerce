// getProductField.tsx
import { useEffect, useState } from "react"

export function useGetProductField() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?populate=*`
    const [result, setResult] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url)
                const json = await res.json()
                setResult(json.data)
                setLoading(false)
            } catch (error: any) {
                setError(error.message)
                setLoading(false)
            }
        })()
    }, [url])

    return { loading, result, error }
}