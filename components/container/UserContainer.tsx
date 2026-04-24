type ContainerProps = {
    children: React.ReactNode
}

export default function UserContainer({children}: ContainerProps) {
  return (
    <div className="h-screen p-3 bg-(--bg-primary)">{children}</div>
  )
}