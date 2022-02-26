import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center my-40 mx-auto space-y-4">
      <h1 className="text-2xl text-indigo-600 dark:text-indigo-400 font-bold tracking-wide">Page Not Found :(</h1>
      <Link to="/" className="underline underline-offset-4 decoration-dashed">
        Back to Homepage
      </Link>
    </div>
  )
}

export default NotFound