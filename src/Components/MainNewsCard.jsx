import React from 'react'





const MainNewsCard = ({news}) => {


  return (
    <div className='grid md:grid-cols-2 gap-4'>
  { news.map((data) =>(
    <div key={data.id} className='border border-zinc-600 flex flex-col mx-auto gap-2   rounded-md '>
        <div className='w-full'  >
      <img src={data.image} alt="news Image" className=' w-full rounded-t-md' />
      </div>
      <h1 className='pl-4 text-xl font-semibold'>{data.title}</h1>
      <p className='pl-4 text-gray-700 dark:text-gray-200'>{data.description
    ? data.description.split(" ").slice(0, 10).join(" ") + "..."
    : "No description available."}</p>
      <button className='border w-24 rounded-full py-1 shrink  bg-slate-800 text-white crusor-pointer dark:bg-indigo-600 dark:border-none mb-4 ml-4'>Read more</button>
    </div>
  )) }
    </div>
  )
}

export default MainNewsCard
