import type { ImageBlockProps } from "@/types/project"

export default function ImageBlock({
  image,
  caption
}: ImageBlockProps) {
  return (
    <div className="flex justify-center px-6 py-14">
      <div className="flex flex-col justify-center max-w-250 gap-2">
        <div className="flex justify-center">
          <img className="" src={image} />
        </div>
        {caption && <div className="flex justify-center">
          <p className="text-xl max-w-[40rem]">
            {caption}
          </p>
        </div>}
      </div>
    </div>
  )
}
