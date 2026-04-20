'use client';
import { SearchBtn, ThemeBtn } from "@/components";
import { useRouter } from "next/navigation";
import { SubmitEventHandler, useState } from "react";

export default function Home() {
  const [value, setValue] = useState<string>('');
  const router = useRouter()

  const searchSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(value);
    router.push(`/user/${value}`)
  }

  return (
    <div>
      <form className="flex gap-2" onSubmit={event => searchSubmit(event)}>
        <input 
          type="text"
          className="w-20 h-9 bg-amber-800" 
          onChange={event => setValue(event.target.value)}
        />
        <SearchBtn />
      </form>
      <ThemeBtn />
    </div>
  );
}