export type HeadingBlockData = {
  component: "HeadingBlock"
  title: string
  subtitle: string
  paragraphs: string[]
  year: number
  platform: string
}

export type ImageBlockData = {
  component: "ImageBlock"
  image: string
}

export type ProjectBlock = HeadingBlockData | ImageBlockData

export type Project = {
  id: string
  children: ProjectBlock[]
}
