function Message() {
  return (
    <div className="flex flex-col justify-center leading-[2.375rem] w-250 gap-4">
      <p className="font-bold text-[1.75rem] space-y-4">404</p>
      <p className="font-medium text-[1.5rem]">Page Not Found</p>
      <p className="text-[1.25rem]">
        The page you are looking for is no longer available.
      </p>
      <p className="text-[1.25rem]">
        Some reasons why this page has shown up might be:
      </p>
      <ul className="list-disc pl-5">
        <li>The page was removed and other pages still link to it</li>
        <li>Our server may be experiencing technical difficulties</li>
        <li>You typed an incorrect address in your browser’s address bar</li>
      </ul>
    </div>
  )
}

export default function NotFound() {
  return (
    <div className="flex justify-center px-6 py-26">
      <Message />
    </div>
  )
}
