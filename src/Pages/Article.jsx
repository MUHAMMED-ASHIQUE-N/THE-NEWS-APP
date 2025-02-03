import React, {  useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Article = () => {
  const { id } = useParams(); 
  const location = useLocation();
  const { articleData } = location.state || {}; 
  const [article, setArticle] = useState(articleData || null);

let news = [article]
 

  
const ne = news.find(nb => nb.id === id);

console.log(ne);

  return (
    <div className="bg-blue-100 dark:bg-black dark:text-white h-screen">
      <Navbar/>

      <div className="mx-auto w-[90%] md:w-[75%] text-center">
  <div className="flex flex-col items-center justify-center py-10 w-full">
    <div className="max-w-full w-full flex items-center justify-center">
      <img
        src={ne.image}
        alt={ne.title}
        className="w-full h-auto max-w-3xl object-cover aspect-[16/8] rounded-md"
      />
    </div>
    <h1 className="border-b text-lg font-semibold mt-4">{ne.title}</h1>
    <p className="text-gray-700 dark:text-gray-300 mt-2  text-left md:w-[65%]">{ne.description}</p>
  </div>
</div>

    </div>
  );
}
export default Article