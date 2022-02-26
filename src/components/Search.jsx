import { useState } from "react"


const Search = ({ searchPhone }) => {
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    searchPhone(search)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm my-4">
      <div className="mx-4 flex items-center py-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="appearance-none bg-transparent border-none w-full text-gray-700 bg-slate-300 dark:bg-gray-700 dark:text-gray-300 mr-3 p-2 leading-tight focus:outline-none rounded shadow-md"
          type="search"
          placeholder="Search Phone..."
          required
        />
        <button
          className="flex-shrink-0 bg-indigo-500 transition-all duration-300 transform hover:scale-95 hover:bg-indigo-700 border-indigo-500 focus:outline-none focus:shadow-outline hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Search