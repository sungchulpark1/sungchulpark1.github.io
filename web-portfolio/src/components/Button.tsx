interface ButtonProps {
  text: string
  link?: string
}

export default function Button({
  text,
  link
}: ButtonProps) {
  return (
    <a href={link} className="w-fit">
      <button className="bg-black text-white px-4 py-2.5 rounded-lg cursor-pointer w-fit">
        {text}
      </button>
    </a>
  )
}
