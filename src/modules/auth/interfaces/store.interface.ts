export interface AuthStoreState {
    status: string, // 'authenticated','not-authenticated', 'authenticating'
    user: string|null,
    token: string,
}

export interface AuthUser{
    name:string|null;
}