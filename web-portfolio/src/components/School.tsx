interface EducationProps {
  degree: string;
  dates: string;
  school: string;
  location: string;
}

function School({
  degree,
  dates,
  school,
  location,
}: EducationProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full mb-4">
        <div className="w-full flex justify-between">
          <div className="font-bold">{school}</div>
          <div className="text-right">{dates}</div>
        </div>

        <div className="w-full flex justify-between">
          <div>{degree}</div>
          <div className="text-right">{location}</div>
        </div>
      </div>
    </div>
  );
}

export default School
