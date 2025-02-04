import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SavedNews = () => {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    setSavedNews(JSON.parse(localStorage.getItem("savedNews")) || []);
  }, []);

  const handleRemove = (id) => {
    const updatedNews = savedNews.filter((article) => article.id !== id);
    setSavedNews(updatedNews);
    localStorage.setItem("savedNews", JSON.stringify(updatedNews));
  };

  return (
    <div className="dark:bg-black min-h-screen">
      <Navbar />
      <div className="p-6">
        {savedNews.length === 0 ? (
          <p className="text-center text-lg dark:text-white">No saved articles found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedNews.map((article) => (
              <div
                key={article.id}
                className="border border-gray-300 dark:border-gray-600 p-4 rounded-md shadow-md flex flex-col"
              >
                
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-44 object-cover  rounded-md mb-3"
                  />
              

                <h2 className="text-xl dark:text-white font-semibold">{article.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2 flex-1">
                  {article.description || "No description available."}
                </p>

                <button
                  onClick={() => handleRemove(article.id)}
                  className="bg-red-500 px-4 py-1 rounded-full font-semibold text-white mt-4 hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedNews;
