export interface User {
    message?: string;
    data?: UserData,
    token?:string,
    refreshToken?:string
}

export interface UserData {
    id?: string;
    firstname?: string;
    lastname?: string;
    bio?: string;
    country?: string;
    email?: string;
}