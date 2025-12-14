interface HeadingBlockProps {
  title: string,
  type: string,
  paragraphs: string[],
  year: number,
  platform: string,
}

export default function HeadingBlock({
  title,
  type,
  paragraphs,
  year,
  platform,
}: HeadingBlockProps) {
  return (
    <div className="flex w-250">
      <div className="flex flex-col gap-2 w-[18.7rem]">
        <span className="font-semibold text-[1.375rem] w-[34rem]">{title}</span>
        <span className="text-[#929292] text-xl">{type}</span>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col leading-[2.375rem] gap-6 text-xl">
          <p>{paragraphs[0]}</p>
          <p>{paragraphs[1]}</p>
        </div>
        <div className="flex gap-16 text-xl">
          <div className="flex flex-col">
            <span className="font-semibold">Year</span>
            <span>{year}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Platform</span>
            <span>{platform}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
