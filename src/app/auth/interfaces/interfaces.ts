
export interface AuthResponse{
    ok: boolean;
    uid?: string;
    msg?: string;
    name?: string;
    email?: string;
    token?: string;
}

export interface Usuario{
    uid: string;
    name: string;
    email: string;
}