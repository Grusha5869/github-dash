import { GitHubUser } from "@/types/githubTypes"

type ProfileProps = {
  userInfo: GitHubUser
}

export default function Profile({userInfo}: ProfileProps) {
  const dateCreatedProfile: Date = new Date(userInfo.created_at);
  const dayCreatedProfile: number = dateCreatedProfile.getDay();
  const monthCreatedProfile: number = dateCreatedProfile.getMonth() + 1;
  const yearCreatedProfile: number = dateCreatedProfile.getFullYear();
  return (
    <div className="max-w-130 w-full p-3 flex gap-5 shrink-0 bg-(--bg-secondary) rounded-md">
        <img 
          width={'150px'}
          height={'150px'}
          src={userInfo.avatar_url} 
          alt="Аватар(картинка)"  
          className="w-37.5 h-37.5"
        />
        <div>
          <strong className="font-roboto-flex">{userInfo.name || userInfo.login}</strong>
          <p className="font-roboto-flex">@{userInfo.login} / {`${dayCreatedProfile}.${monthCreatedProfile}.${yearCreatedProfile}`}</p>
          <p className="font-roboto-flex">{userInfo.bio}</p>
          <a className="font-roboto-flex" href={userInfo.html_url} rel="noopener noreferrer" target="_blank">Ссылка на гитхаб</a>
        </div>
    </div>
  )
}