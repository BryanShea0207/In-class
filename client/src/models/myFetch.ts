export const API_ROOT = (import.meta.env.VITE_ROOT as string) ?? /api/v

export function rest<T>(url: string): Promise<T> {
    return fetch(url).then((x) => x.json())
}

export function api<T>(url: string): Promise<T> {
    return rest<T>(`/api/${url}`)
}

