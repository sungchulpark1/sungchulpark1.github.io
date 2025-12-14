import type { ContentBlockProps } from "@/types/project"

export default function ContentBlock({
  title,
  subtitle,
  paragraphs,
}: ContentBlockProps) {
  return (
    <div className="flex justify-center px-6 py-40">
      <div className="flex flex-wrap md:flex-nowrap max-w-250 gap-4 md:gap-16">
        <div className="flex flex-col gap-2 md:w-1/2">
          <span className="font-semibold text-[1.375rem]">{title}</span>
          <span className="text-[#929292] text-xl">{subtitle}</span>
        </div>
        <div className="flex flex-col gap-16 md:w-1/2">
          <div className="flex flex-col leading-[2.375rem] gap-6 text-xl">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
