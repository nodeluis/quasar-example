export interface SendUserAuth {
    user:string;
    password:string;
}

export interface PushTokenAndUser {
    token:string|null;
    user:string|null;
}

export interface ResponseSigninApi{
    ok:boolean;
    message:string;
    user:string|null;
    token:string|null;
}