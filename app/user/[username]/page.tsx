import { getUser, getUserRepos, getUserEvents } from "@/lib/githubApi"
import { UserContainer } from "@/components"

type PageProps = {
    params: Promise<{ username: string }>
}

export default async function Page({ params }: PageProps) {
    const { username } = await params;
    //const userRepos = await getUserRepos(username);

    const [userInfo, userRepos, userEvents] = await Promise.all([
        getUser(username), 
        getUserRepos(username), 
        getUserEvents(username)
    ])
    console.log(userInfo);
    console.log(userRepos);
    console.log(userEvents);
    
    return (
        <UserContainer>
            <p>Все репозитории пользователя: {username}</p>
            <ul className="flex flex-col gap-2">
                {userRepos.map(elem => 
                    <li key={Math.random() * 1000} className="bg-black">
                        <p className="text-white">{elem?.name || 'имя репозитория неизвестно'} - ⭐ {elem.stargazers_count}</p>
                        <a className="text-white" href={elem?.html_url || '#'} rel="noopener noreferrer" target="_blank">Ссылка на репозиторий</a>
                        <p className="text-white">{elem?.description || 'нет описания'}</p>
                    </li>
                )}
            </ul>
        </UserContainer>
    )
}