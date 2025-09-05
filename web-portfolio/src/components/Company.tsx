interface CompanyProps {
  title: string;
  dates: string;
  company: string;
  location: string;
  responsibilities: string[];
}

function Company({
  title,
  dates,
  company,
  location,
  responsibilities
}: CompanyProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full mb-8">
        <div className="w-full flex justify-between">
          <div className="font-bold">{title}</div>
          <div className="text-right">{dates}</div>
        </div>

        <div className="w-full flex justify-between">
          <div>{company}</div>
          <div className="text-right">{location}</div>
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

export default Company
