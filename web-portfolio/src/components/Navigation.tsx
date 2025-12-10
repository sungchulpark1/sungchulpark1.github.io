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
    <h1 className="font-black text-xl">
      Sungchul Park
    </h1>
  )
}

function ExtraContent() {
  return (
    <div className="flex gap-8">
      <Link />
      <Button />
    </div>
  )
}

function Link() {
  return (
    <div className="flex items-center">
      Case studies
    </div>
  )
}

function Button() {
  return (
    <button className="bg-black text-white px-4 py-2.5 rounded-lg cursor-pointer">
      Let's work together
    </button>
  )
}

export default function Navigation() {
  return (
    <div className="flex justify-center h-20 px-6">
      <Content />
    </div>
  )
}
