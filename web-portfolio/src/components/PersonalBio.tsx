import PhotoPicture from "../assets/photo.png"

function Photo() {
  return (
    <div>
      <img src={PhotoPicture} className="w-22.5" />
    </div>
  )
}

function Heading() {
  return (
    <h1 className="font-black text-[2.5rem]">
      Hi, I'm Sungchul Park!
    </h1>
  )
}

function Description() {
  return (
    <div className="font-normal text-[1.75rem] leading-[2.375rem] space-y-4">
      <p>I’m a <strong className="font-bold" >Software Developer.</strong> I’m passionate about solving problems and building creative solutions. When I’m not working, I love cuddling with my dog. </p>
      <p>I’ve previously worked in tech startups for a couple of years and now working as a <strong className="font-bold">Freelance Web Developer.</strong></p>
    </div>
  )
}

function LandingPageHero() {
  return (
    <div className="flex flex-col max-w-250 gap-6">
      <Photo />
      <Heading />
      <Description />
    </div>
  )
}

export default function PersonalBio() {
  return (
    <div className="flex justify-center px-6 py-26">
      <LandingPageHero />
    </div>
  )
}
