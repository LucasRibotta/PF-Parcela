"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";

export default function Login() {
    const { data: session } = useSession();
    console.log(session);

    if (session) {
        return (
            <div>
                <button onClick={() => signOut()} type="button">Salir de Google</button>
                {/* Pass session info to server component */}
                <UserCard user={session?.user} />
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => signIn()} type="button">Entrar con Google</button>
            </div>
        )
    }

    // if a user doesn't exist -> show a Sign In button
}