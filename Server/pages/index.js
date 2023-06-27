// import { Nav } from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();
	if (!session) {
		return (
			<div className='bg-blue-900 w-screen h-screen flex items-center'>
				<div className='text-center w-full'>
					<button
						className='bg-white text-black p-2 px-4 rounded-lg'
						onClick={() =>
							signIn("google", { callbackUrl: "http://localhost:3000" })
						}
					>
						Login with Google
					</button>
				</div>
			</div>
		);
	}
	return (
		<div className='bg-blue-900 min-h-screen'>
			{/* <Nav /> */}
			<div>Logged in {session.user.email}</div>
		</div>
	);
}
