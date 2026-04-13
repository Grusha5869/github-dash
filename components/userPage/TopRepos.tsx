import { GitHubRepository } from "@/types/githubTypes"

type TopReposProps = {
  userRepos: GitHubRepository[]
}

export default function TopRepos({userRepos}: TopReposProps) {
    const top7Repos = userRepos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 7)
    
    return (
        <>
            <p>Топ репозиториев:</p>
            <ol className="list-decimal">
                {top7Repos.map(elem => 
                    <li key={Math.random() * 199}>
                        <p>{elem.name}</p>
                        <p>{elem.stargazers_count}⭐</p>
                    </li>
                )}
            </ol>
        </>
    )
}