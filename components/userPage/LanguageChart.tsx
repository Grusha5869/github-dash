'use client'

import { GitHubRepository } from "@/types/githubTypes"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

type LanguageChartProps = {
    userRepos: GitHubRepository[]
}

type LangRes = {
    lang: string,
    value: number
}

export default function LanguageChart({ userRepos }: LanguageChartProps) {
    const COLORS: string[] = ['#2E86AB', '#A23B72', '#F18F01', '#C73E1D', '#6A9C89'];
    const langColl = new Map<string, number>();

    for (const elem of userRepos) {
        const lang: string = elem.language || 'Другое';
        langColl.set(lang, (langColl.get(lang) || 0) + 1);
    }

    const langRes: LangRes[] = Array.from(langColl).map(elem => {
        const [lang, value] = elem
        return {
            lang, value
        }
    }).sort((a, b) => b.value - a.value).splice(0, 5)

    return (
        <div className="margin-auto-0">
            <PieChart width={300} height={300}>
            <Pie
                data={langRes}
                dataKey="value"
                nameKey="lang"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
            >
                {langRes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            </PieChart>
        </div>
    );
}