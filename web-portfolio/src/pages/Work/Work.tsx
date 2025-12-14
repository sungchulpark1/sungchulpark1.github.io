import { useLocation, useParams } from "react-router"
import type { Project } from "@/types/project"
import HeadingBlock from "@/components/blocks/HeadingBlock"
import ImageBlock from "@/components/blocks/ImageBlock"
import projectData from "@/data/projects.json"
import ContentBlock from "@/components/blocks/ContentBlock"
import { useEffect } from "react"

const projects = projectData as { data: Project[] }

export default function Work() {
  const { pathname } = useLocation();

  const { projectId } = useParams()

  const project = projects.data.find(
    project => project.id === projectId
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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

          case "ContentBlock":
            return (
              <ContentBlock
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
