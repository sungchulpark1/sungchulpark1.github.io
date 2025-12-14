export type HeadingBlockData = {
  component: "HeadingBlock"
  title: string
  subtitle: string
  paragraphs: string[]
  year: number
  platform: string
}

export type HeadingBlockProps = Omit<HeadingBlockData, "component">

export type ImageBlockData = {
  component: "ImageBlock"
  image: string
}

export type ImageBlockProps = Omit<ImageBlockData, "component">

export type ProjectBlock = HeadingBlockData | ImageBlockData

export type Project = {
  id: string
  children: ProjectBlock[]
}
