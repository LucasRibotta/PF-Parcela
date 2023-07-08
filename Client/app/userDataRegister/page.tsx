"use client"
import { useSession } from "next-auth/react"

const UserDataRegister = () => {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
        console.log('userData', 'componente de usuario registrado');
    }

    return (
        <div>
            <img src={session?.user?.image ?? "default-image-url"} alt="no found" />
            <p>{session?.user?.email}</p>
            <p>{session?.user?.name}</p>
        </div>
    )
}



export default UserDataRegister