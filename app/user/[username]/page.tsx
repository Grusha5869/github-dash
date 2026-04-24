import { getUser, getUserRepos, getUserEvents } from "@/lib/githubApi"
import { UserContainer, Profile, Statistic, TopRepos, LanguageChart, ActivityChart, ThemeBtn, BackBtn } from "@/components"

type PageProps = {
    params: Promise<{ username: string }>
}

export default async function Page({ params }: PageProps) {
    const { username } = await params;
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
            <div className="flex gap-10 mb-7 max-lg:flex-col">
                <Profile
                    userInfo={userInfo}
                />
                <Statistic
                    userInfo={userInfo}
                    userRepos={userRepos}
                />
            </div>
            <div className="flex gap-4">
                <TopRepos
                    userRepos={userRepos}
                />
                <ActivityChart
                    userEvents={userEvents}
                />
                <LanguageChart
                    userRepos={userRepos}
                />
            </div>
            <div className="absolute top-3 right-3 flex flex-col gap-2">
                <ThemeBtn />
                <BackBtn />
            </div>
           
        </UserContainer>
    )
}