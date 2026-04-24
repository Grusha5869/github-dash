import { GitHubRepository } from "@/types/githubTypes"

type TopReposProps = {
  userRepos: GitHubRepository[]
}

export default function TopRepos({userRepos}: TopReposProps) {
    const top7Repos = userRepos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 7)

    return (
        <div className="max-w-[10%] w-full items-center">
            <p className="font-roboto-flex">Топ репозиториев:</p>
            <ol className="pl-3 flex flex-col gap-1.5">
                {top7Repos.map((elem, index) => {
                    const num: number = index + 1
                    return (
                        <li className={`bg-(--rank-${num}) rounded-md p-2.5`} key={Math.random() * 199}>
                            <p className="font-roboto-flex">{num}. {elem.name}</p>
                            <p className="font-roboto-flex">⭐{elem.stargazers_count}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}