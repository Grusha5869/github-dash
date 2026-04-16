import { getUser, getUserRepos, getUserEvents } from "@/lib/githubApi"
import { UserContainer, Profile, Statistic, TopRepos, LanguageChart } from "@/components"

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
            <div className="flex gap-10 mb-7">
                <Profile
                    userInfo={userInfo}
                />
                <Statistic
                    userInfo={userInfo}
                    userRepos={userRepos}
                />
            </div>
            <div className="flex h-150">
                <TopRepos
                    userRepos={userRepos}
                />
                <LanguageChart
                    userRepos={userRepos}
                />
            </div>
        </UserContainer>
    )
}