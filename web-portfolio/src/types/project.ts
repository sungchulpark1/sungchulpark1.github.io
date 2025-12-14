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
  caption?: string
}
export type ImageBlockProps = Omit<ImageBlockData, "component">

export type ContentBlockData = {
  component: "ContentBlock"
  title: string
  subtitle: string
  paragraphs: string[]
  button?: {
    text: string
    link: string
  }
}
export type ContentBlockProps = Omit<ContentBlockData, "component">

export type ProjectBlock = HeadingBlockData | ImageBlockData | ContentBlockData

export type Project = {
  id: string
  children: ProjectBlock[]
}
