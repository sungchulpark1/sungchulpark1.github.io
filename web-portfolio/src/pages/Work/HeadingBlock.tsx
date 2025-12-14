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
    <div className="flex justify-center px-6 py-40">
      <div className="flex flex-wrap md:flex-nowrap max-w-250 gap-4 md:gap-0">
        <div className="flex flex-col gap-2 md:w-1/2">
          <span className="font-semibold text-[1.375rem]">{title}</span>
          <span className="text-[#929292] text-xl">{type}</span>
        </div>
        <div className="flex flex-col gap-16 md:w-1/2">
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
    </div>
  )
}
