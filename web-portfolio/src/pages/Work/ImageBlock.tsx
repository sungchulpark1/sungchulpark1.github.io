interface ImageBlockProps {
  image: string
}

export default function ImageBlock({
  image
}: ImageBlockProps) {
  return (
    <div className="flex justify-center px-6 py-14">
      <div className="max-w-250">
        <img src={image} />
      </div>
    </div>
  )
}
