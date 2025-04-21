import { api } from "./session";

export interface User {
    id: string,
    firstName: string
    lastName: string,
    email: string,
    phone: string,
    age: number,
    gender: string,
    birthdate: string,
    image: string,
    university: string
    role: string
}

export function get(): Promise<User>{
    return api('users')
}

export function getAll(): Promise<User>{
    return api('users/${id}')
}

