import { SearchBtn } from "@/components"
import { SubmitEventHandler } from "react"

type FormHomeProps = {
    setValue: (value: string) => void;
    searchSubmit: SubmitEventHandler<HTMLFormElement>
}

export default function FormHome({ setValue, searchSubmit }: FormHomeProps) {
    return (
        <form className="flex gap-2" onSubmit={event => searchSubmit(event)}>
          <input 
            type="text"
            className="w-100 h-9 p-2 bg-(--bg-secondary) flex-1 text-(--text-secondary)" 
            onChange={event => setValue(event.target.value)}
            placeholder="Введите пользователя гитхаб. Например: gaearon"
          />
          <SearchBtn />
        </form>
    )
}