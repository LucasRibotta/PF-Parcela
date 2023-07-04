type ButtonProps = {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-[#51a8a1] border-[#51a8a1] border-[1px] text-white hover:bg-[#126e67]  ease-in-out duration-300 px-4 py-[6px] ">
      {text}
    </button>
  )
}
