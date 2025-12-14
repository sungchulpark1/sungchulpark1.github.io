interface ButtonProps {
  text: string
  type?: string
  link?: string
}

export default function Button({
  text,
  type,
  link
}: ButtonProps) {
  return (
    <a href={link} className="w-fit">
      {type === "secondary" ? <button className="bg-[#FFFDF8] text-black border-black border-solid border-1 px-4 py-2.5 rounded-lg cursor-pointer w-fit hover:bg-black hover:text-[#FFFDF8] duration-200 ease-in-out">
        {text}
      </button> : <button className="bg-black text-white px-4 py-2.5 rounded-lg cursor-pointer w-fit">
        {text}
      </button>}
    </a>
  )
}
