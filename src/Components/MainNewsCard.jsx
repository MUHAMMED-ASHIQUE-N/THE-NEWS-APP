import React from "react";
import { useNavigate } from "react-router-dom";

const MainNewsCard = ({ news }) => {
  const navigate = useNavigate();

  const handleSaveArticle = (article) => {
    const savedArticles = JSON.parse(localStorage.getItem("savedNews")) || [];
    
    const isAlreadySaved = savedArticles.some((item) => item.id === article.id);
    
    if (!isAlreadySaved) {
      const updatedArticles = [...savedArticles, article];
      localStorage.setItem("savedNews", JSON.stringify(updatedArticles));
      alert("Article saved!");
    } else {
      alert("This article is already saved.");
    }
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((data) => (
        <div
          key={data.id}
          className="border border-zinc-600 flex flex-col mx-auto gap-3 bg-white dark:bg-gray-800 rounded-md overflow-hidden max-w-md"
        >
          <div className="w-full aspect-[16/9] overflow-hidden">
            <img
              src={data.image}
              alt="News Image"
              className="w-full h-full object-cover rounded-t-md"
              loading="lazy"
            />
          </div>

          <div className="p-4">
            <h1 className="text-xl font-semibold line-clamp-2">{data.title}</h1>
            <p className="text-gray-700 dark:text-gray-200 line-clamp-2 mt-2">
              {data.description || "No description available."}
            </p>
          </div>

          <div className="flex justify-between items-center px-4 pb-4">
            <button
              onClick={() => navigate(`/article/${data.id}`, { state: { articleData: data } })}
              className="border w-24 rounded-full py-1 bg-slate-800 text-white cursor-pointer dark:bg-indigo-600 dark:border-none hover:bg-slate-700 transition text-sm"
            >
              Read More
            </button>
            <button  onClick={() => handleSaveArticle(data)} className="border px-5 rounded-full py-1 text-white cursor-pointer bg-red-500 dark:border-none hover:bg-red-600 transition text-sm">
              Save
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainNewsCard;
