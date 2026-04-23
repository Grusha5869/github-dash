type ContainerProps = {
    children: React.ReactNode
}

export default function MainContainer({ children }: ContainerProps) {
    return (
        <div className="relative w-200 h-screen margin-0-auto p-3 bg-(--bg-primary)">{children}</div>
    )
}