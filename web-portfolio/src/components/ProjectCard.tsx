import Button from "./Button";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

function Thumbnail({
  image
}: { image: string }) {
  return (
    <div className="min-w-100">
      <img src={image} />
    </div>
  )
}

function Content({
  title,
  description
}: { title: string, description: string }) {
  return (
    <div className="flex flex-col gap-4">
      <Title title={title} />
      <Description description={description} />
      <Button text={"View Project"} link={"https://celestialshaadis.com"} />
    </div>
  )
}

function Title({
  title
}: { title: string }) {
  return (
    <h1 className="font-semibold text-[1.5625rem]">
      {title}
    </h1>
  )
}

function Description({
  description
}: { description: string }) {
  return (
    <p className="font-normal text-xl">
      {description}
    </p>
  )
}

export default function ProjectCard({
  image,
  title,
  description
}: ProjectCardProps) {
  return (
    <div className="flex justify-center px-6 py-14">
      <div className="flex w-250 gap-8">
        <Thumbnail image={image} />
        <Content title={title} description={description} />
      </div>
    </div>
  )
}