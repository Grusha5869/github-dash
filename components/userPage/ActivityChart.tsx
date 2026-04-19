'use client'

import { GitHubEvent } from "@/types/githubTypes"
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts"

type ActivityChartProps = {
    userEvents: GitHubEvent[]
}

type DailyData = {
    date: string,
    commits: number
}

export default function ActivityChart({ userEvents }: ActivityChartProps) {
    const pushEvents = userEvents.filter(event => event.type === 'PushEvent')
    const commitsByDate = new Map<string, number>()
    
    for (const event of pushEvents) {
        const date = event.created_at.slice(0, 10)
        const commitCount = (event.payload as any).commits?.length ?? 1
        const current = commitsByDate.get(date) || 0
        commitsByDate.set(date, current + commitCount)
    }
    
    let chartData: DailyData[] = Array.from(commitsByDate.entries()).map(([date, commits]) => ({
        date,
        commits
    }))
    chartData.sort((a, b) => a.date.localeCompare(b.date))
   
    const filledData: DailyData[] = []
    for (let i = 0; i < chartData.length; i++) {
        filledData.push(chartData[i])
        
        if (i < chartData.length - 1) {
            const currentDate = new Date(chartData[i].date)
            const nextDate = new Date(chartData[i + 1].date)
            const diffDays = (nextDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
            
            if (diffDays > 3) {
                let tempDate = new Date(currentDate)
                tempDate.setDate(tempDate.getDate() + 3)
                while (tempDate < nextDate) {
                    filledData.push({
                        date: tempDate.toISOString().slice(0, 10),
                        commits: 0
                    })
                    tempDate.setDate(tempDate.getDate() + 3)
                }
            }
        }
    }
   
    filledData.sort((a, b) => a.date.localeCompare(b.date))
    
    if (filledData.length === 0) {
        return <div className="text-center py-10">Нет Push-событий</div>
    }
    
    return (
        <ResponsiveContainer width="80%" height={500}>
            <LineChart data={filledData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="commits" stroke="#58A6FF" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    )
}