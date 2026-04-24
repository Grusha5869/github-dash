'use client';
import { FormHome, ThemeBtn, MainContainer, InfoOpportunities } from "@/components";
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
    <MainContainer>
      <div className="flex flex-col justify-center h-full">
        <FormHome
          setValue={setValue}
          searchSubmit={searchSubmit}
        />
        <p className="text-[13px] pl-4 font-roboto-flex">Популярные: gaearon  Grusha5869  octocat  vercel</p>
        <div className="absolute top-3 right-3">
          <ThemeBtn />
        </div>
        <InfoOpportunities />
      </div>
    </MainContainer>
  );
}