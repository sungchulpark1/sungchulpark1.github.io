import type { Project } from "@/types/project"
import { useParams } from "react-router"
import HeadingBlock from "@/components/blocks/HeadingBlock"
import ImageBlock from "@/components/blocks/ImageBlock"
import projectData from "@/data/projects.json"

const projects = projectData as { data: Project[] }

export default function Work() {
  const { projectId } = useParams()

  const project = projects.data.find(
    project => project.id === projectId
  )

  if (!project) return null

  return (
    <div className="flex flex-col">
      {project.children.map((block, index) => {
        switch (block.component) {
          case "HeadingBlock":
            return (
              <HeadingBlock
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                paragraphs={block.paragraphs}
                year={block.year}
                platform={block.platform}
              />
            )

          case "ImageBlock":
            return (
              <ImageBlock
                key={index}
                image={block.image}
              />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
