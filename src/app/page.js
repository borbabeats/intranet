'use client'

import { useEffect, useState } from "react"

const Home = () => {
    const [username, setUsername] = useState('')

    useEffect(() => {
        async function fetchUsername() {
            const res = await fetch('/api/username')
            const data = await res.json()
            setUsername(data.username)
            console.log(data)
        }

        fetchUsername()
    }, [])

    return (
        <h1 className="flex min-h-screen flex-col items-center justify-between p-4 text-xl">Hello, {username}!</h1>
    )
} 
export default Home