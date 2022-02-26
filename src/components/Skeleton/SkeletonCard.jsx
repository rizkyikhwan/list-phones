const SkeletonCard = () => {
  return (
    <div className="bg-gradient-to-t from-white dark:from-slate-700 via-transparent dark:via-transparent p-3 rounded-lg drop-shadow-md">
      <div className="animate-pulse flex flex-col space-y-3">
        <div className="bg-slate-700 dark:bg-slate-300 rounded h-44 w-3/4 mx-auto"></div>
        <div className="bg-slate-700 dark:bg-slate-300 rounded h-4 w-full"></div>
      </div>
    </div>
  )
}

export default SkeletonCard