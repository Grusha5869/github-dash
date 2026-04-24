'use client'

import { useRouter } from "next/navigation"

export default function BackBtn() {
    const router = useRouter()
    function handleClick() {
        router.push("/")
    }
    return (
        <button 
            onClick={handleClick}
            className="p-2 rounded-xl bg-(--bg-secondary) hover:bg-(--bg-secondary-hover) transition-(--transition-default) cursor-pointer"
            aria-label="Вернуться назад"
        >Назад</button>
    )
}