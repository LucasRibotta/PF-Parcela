import Link from "next/link"

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
      </ul>
    </div>
  )
}
