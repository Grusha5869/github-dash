type ContainerProps = {
    children: React.ReactNode
}

export default function UserContainer({children}: ContainerProps) {
  return (
    <div className="p-3">{children}</div>
  )
}