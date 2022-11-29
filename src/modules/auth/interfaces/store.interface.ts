export interface AuthStoreState {
    status: string, // 'authenticated','not-authenticated', 'authenticating'
    user: AuthUser,
    token: string|null,
}

export interface AuthUser{
    name:string|null;
}
  
export interface AuthStoreGetters {
    doubleCount: (state: AuthStoreState) => number
}