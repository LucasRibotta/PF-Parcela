type ButtonProps = {
  text: string
}

export default function Button({ text }: ButtonProps) {
  return (
    <button className="bg-transparent border-[#51a8a1] border-[1px] text-[#51a8a1] hover:bg-[#51a8a1] hover:text-white ease-in-out duration-300 px-4 py-[6px] rounded">
      {text}
    </button>
  )
}
