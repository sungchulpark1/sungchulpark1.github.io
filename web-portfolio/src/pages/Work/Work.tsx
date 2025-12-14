import { useParams } from "react-router"
import HeadingBlock from "./HeadingBlock"
import ImageBlock from "./ImageBlock"
import image0 from "../../assets/celestial-shaadis/image0.png"

export default function Work() {
  const params = useParams()

  console.log(params)

  return (
    <div className="flex flex-col">
      <HeadingBlock 
        title={"Celestial Shaadis"}
        type={"Wedding planning service"}
        paragraphs={["Designing, developing, and deploying a promotional website for a wedding planning service.", "Celestial Shaadis is a wedding planning service located in the GTA, offering a range of services from day-of-coordination, partial, MC, and full wedding planning."]}
        year={2025}
        platform="Web"
      />
      <ImageBlock image={image0} />
    </div>
  )
}
