import { useParams } from "react-router"
import type { Project } from "@/types/project"
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
      {project.children.map((block, idx) => {
        switch (block.component) {
          case "HeadingBlock":
            return (
              <HeadingBlock
                key={idx}
                {...block}
              />
            )

          case "ImageBlock":
            return (
              <ImageBlock
                key={idx}
                {...block}
              />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
