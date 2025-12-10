interface SectionHeadingProps {
  title: string
}

export default function SectionHeading({
  title
}: SectionHeadingProps) {
  return (
    <div className="flex justify-center px-6 pt-18">
      <div className="w-250">
        <h1 className="font-bold text-[1.75rem]">
          {title}
        </h1>
      </div>
    </div>
  )
}
