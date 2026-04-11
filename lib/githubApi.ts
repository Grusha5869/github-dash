// lib/githubApi.ts
import { GitHubUser, GitHubRepository, GitHubEvent } from "@/types/githubTypes"
const GITHUB_API_BASE = 'https://api.github.com';

// Универсальная функция для всех запросов к GitHub API
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
    next: { revalidate: 3600 }, // Кешируем ответ от сервера Next.js на 1 час
  });

  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(`GitHub API Error (${res.status}): ${errorData}`);
  }

  return res.json();
}

// --- Функции для твоего дашборда ---

// Получение информации о пользователе
export async function getUser(username: string) {
  return githubFetch<GitHubUser>(`/users/${username}`);
}

// Получение списка репозиториев пользователя
export async function getUserRepos(username: string) {
  // sort=updated: сначала недавно обновленные
  // per_page=100: максимум репозиториев за один запрос
  return githubFetch<GitHubRepository[]>(`/users/${username}/repos?sort=updated&per_page=100`);
}

// Получение последних событий пользователя (например, PushEvent для подсчета коммитов)
export async function getUserEvents(username: string) {
  return githubFetch<GitHubEvent[]>(`/users/${username}/events?per_page=100`);
}














