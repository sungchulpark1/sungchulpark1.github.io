interface SectionHeadingProps {
  title: string
}

export default function SectionHeading({
  title
}: SectionHeadingProps) {
  return (
    <div className="px-6 py-18">
      <h1 className="font-bold text-[1.75rem]">
        {title}
      </h1>
    </div>
  )
}
