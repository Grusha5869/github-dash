// lib/githubApi.ts
import { GitHubUser, GitHubRepository, GitHubEvent } from "@/types/githubTypes"
const GITHUB_API_BASE = 'https://api.github.com';

async function githubFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${GITHUB_API_BASE}${endpoint}`;
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const res = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options?.headers,
    },
    next: { revalidate: 3600 }, // кеширование ответа на сервер
  });

  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(`GitHub API Error (${res.status}): ${errorData}`);
  }

  return res.json();
}

// Получение информации о пользователе
export async function getUser(username: string) {
  return githubFetch<GitHubUser>(`/users/${username}`);
}

// Получение списка репозиториев
export async function getUserRepos(username: string) {
  return githubFetch<GitHubRepository[]>(`/users/${username}/repos?sort=updated&per_page=100`);
}

// Получение последних событий пользователя
export async function getUserEvents(username: string) {
  return githubFetch<GitHubEvent[]>(`/users/${username}/events?per_page=100`);
}














