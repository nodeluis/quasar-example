export interface SendUserAuth {
    user:string;
    password:string;
}

export interface PushTokenAndUser {
    token:string|null;
    username:string|null;
}

export interface ResponseSigninApi{
    ok:boolean;
    message:string;
    username:string|null;
    token:string|null;
}