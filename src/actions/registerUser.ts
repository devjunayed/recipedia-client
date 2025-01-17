"use server";

import { IFormInput } from "@/app/register/page";

export const registerUser = async (data: IFormInput) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store"
    });
    const userInfo = await res.json();
    return userInfo;
}