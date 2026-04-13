import { GitHubUser, GitHubRepository } from "@/types/githubTypes"

type StatisticProps = {
  userInfo: GitHubUser,
  userRepos: GitHubRepository[]
}

type StatisticList = {
  title: string,
  value: number
}

export default function Statistic({userInfo, userRepos}: StatisticProps) {
  if (!userRepos) {
    return (
      <div>Нет репозиториев</div>
    )
  }

  const sumStar: number = userRepos.reduce((res, elem) => res + elem.stargazers_count, 0)

  const statisticList: StatisticList[] = [
    {title: '📁Репозитории', value: userInfo.public_repos},
    {title: '⭐Звёзды', value: sumStar},
    {title: '👥Подписчики', value: userInfo.followers},
    {title: '🔔Подписаны', value: userInfo.following}
  ]

  console.log(statisticList);
  

  return (
    <ul className="flex gap-5 items-center">
      {statisticList.map(elem => 
        <li className="border-2 border-(--bg-secondary) rounded-md p-25-15 flex flex-col items-center gap-1" key={Math.random() * 199}>
          <p className="text-xl">{elem.title}</p>
          <p className="text-xl">{elem.value}</p>
        </li>
      )}
    </ul>
  )
}