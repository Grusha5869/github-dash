'use client'
type BtnProps = {
    text?: string,
}

export default function SearchBtn({ text = "Анализ" }: BtnProps) {
    return (
        <button 
          type="submit"
          className="border-2 p-1.5 rounded-md"
        >{text}</button>
    )
}