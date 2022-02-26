const Card = ({ phone }) => {
  return (
    <div className="bg-gradient-to-t from-white dark:from-slate-700 via-transparent dark:via-transparent p-3 rounded-lg drop-shadow-md group hover:cursor-pointer">
      <figure className="flex items-center justify-center mb-3">
        <img src={phone.image} alt={phone.phone_name} className="rounded-lg shadow-md w-3/4 group-hover:-translate-y-1 group-hover:shadow-lg transition duration-300 ease-in-out" />
      </figure>
      <h3 className="text-center font-semibold text-base tracking-wide group-hover:text-indigo-500 transition duration-200">{phone.phone_name}</h3>
    </div>
  )
}

export default Card;