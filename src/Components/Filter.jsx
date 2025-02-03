import React from 'react';


const category =['Technology','Sports','Business','Entertainment']

const Filter = ({filter,onFilterChange}) => {



 const handleFilterValue = (val) =>{
console.log(val)
onFilterChange(val)

 }
  return (
    <div className='flex items-center justify-center gap-4 py-2 border-b border-gray-500font-semibold text-white border-gray-500 text-white bg-gray-900'>
      {category.map((val, index) => (
        <p onClick={()=>handleFilterValue(val)} key={index}  className={`cursor-pointer ${filter === val ? "font-bold" : ""}`} >{val}</p>
      ))}
  
    </div>
  )
}

export default Filter
