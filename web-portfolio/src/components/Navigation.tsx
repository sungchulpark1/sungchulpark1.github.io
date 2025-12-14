import { Link } from "react-router"
import Button from "./Button"

function Content() {
  return (
    <div className="flex justify-between items-center w-250">
      <Name />
      <ExtraContent />
    </div>

  )
}

function Name() {
  return (
    <Link to="/">
      <h1 className="font-black text-xl">
        Sungchul Park
      </h1>
    </Link>
  )
}

function ExtraContent() {
  return (
    <div className="flex gap-8">
      <NavLink />
      <Button text={"Let's work together"} link={"mailto:spark0843@gmail.com"} />
    </div>
  )
}

function NavLink() {
  return (
    <div className="flex items-center">
      <a href="/#work" className="hover:text-gray-700">
        Case studies
      </a>
    </div>
  )
}


export default function Navigation() {
  return (
    <div className="bg-[#FFFDF8] flex justify-center h-20 px-6 sticky top-0">
      <Content />
    </div>
  )
}
