"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { InfoUserLogged } from "@/components/InfoUserLogged/InfoUserLogged"
import { BiLogoGmail } from "react-icons/bi"

export default function ButtonGoogle() {
  // const { data: session } = useSession();
  // console.log(session);

  // if (session) {
  //     return (
  //         <div>
  //             <button onClick={() => signOut()} type="button">Salir de Google</button>
  //             {/* Pass session info to server component */}
  //             <InfoUserLogged user={session?.user} />
  //         </div>
  //     )
  // } else {
  return (
    <div>
      <button onClick={() => signIn()} type="button">
        <BiLogoGmail className="h-4 w-4 text-[#51a8a1]" />
      </button>
    </div>
  )
}

// if a user doesn't exist -> show a Sign In button
