interface ProjectProps {
  title: string;
  dates: string;
  projectTitle: string;
  projectLink: string;
  responsibilities: string[];
}

function Project({
  title,
  dates,
  projectTitle,
  projectLink,
  responsibilities
}: ProjectProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full mb-8">
        <div className="w-full flex justify-between">
          <div className="font-bold">{title}</div>
          <div className="text-right">{dates}</div>
        </div>

        <div className="w-full flex justify-between">
          <div>{projectTitle}</div>
          <div className="text-right"><a href={projectLink}>View Project</a></div>
        </div>

        <div className="w-full">
          <ul className="list-disc list-inside mt-2">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project
