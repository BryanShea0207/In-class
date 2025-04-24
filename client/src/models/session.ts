import * as myFetch from "./myFetch";
import type { User } from "./users";
import { ref} from 'vue'

export function api<T>(action: string): Promise<T> {
 return myFetch.api<T>(action)
}

const session = ref({
    user: null as User | null,
    token: null as string | null
})

export function refSession(){
    return session
}

export const isAdmin = () => session.value?.user?.role === 'admin'

export const isLoggedIn = () => session.value?.user !== null

export function login(id: string) {
    return get(id(id))
}