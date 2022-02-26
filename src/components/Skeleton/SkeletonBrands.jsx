const SkeletonBrands = () => {
  return (
    <div className="py-5 px-3 border-2 border-gray-500 dark:border-gray-300 rounded-lg shadow-md bg-slate-300 dark:bg-slate-700 transition duration-200">
      <div className="animate-pulse space-y-3">
        <div className="bg-slate-500 dark:bg-slate-300 rounded h-4 w-1/2"></div>
        <div className="bg-slate-500 dark:bg-slate-300 rounded h-4 w-3/4"></div>
      </div>
    </div>
  )
}

export default SkeletonBrands