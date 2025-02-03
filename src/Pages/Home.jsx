import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Filter from '../Components/Filter';
import downArrow from "../assets/down-arrow.svg";
import NewsCard from '../Components/NewsCard';
import axios from '../Axios';
import { API_KEY } from '../Constans/Constant';

const Home = () => {
  const [sortOption, setSortOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general')

 
  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);
    console.log("Selected Sort Option:", option);

    if (option === "Trending") {
      setCategory("trending"); 
    } else if (option === "Defualt"){
      setCategory("general"); 
    }else{
    
    

    let sortedNews;
    if (option === "Oldest to Newest") {
      sortedNews = [...news].sort((a, b) => new Date(a.published) - new Date(b.published)); 
    } else if (option === "Newest to Oldest") {
      sortedNews = [...news].sort((a, b) => new Date(b.published) - new Date(a.published)); 
    }
    setNews(sortedNews); 
  };
}

  useEffect(() => {
    axios
      .get(`?&category=${category}&language=en&apiKey=${API_KEY}`)
      .then((response) => {
        console.log(response.data.news);
        setNews(response.data.news);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <div className='bg-white dark:bg-neutral-800 dark:text-white h-auto w-full'>
      <Navbar />
      <Filter />
      <div className='mx-auto w-[80%]'>
        <div className='py-5 flex justify-center items-center gap-4 relative'>
          <input type="text" className='border w-[50%] px-4 py-2 rounded-full' />
          
          <div>
            <button
              className='px-4 py-2 border rounded-full bg-black text-white font-semibold flex items-center justify-center cursor-pointer dark:border-none dark:bg-indigo-600 relative'
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{sortOption || "default"}</span>
              <img src={downArrow} className='w-5 h-5 pt-1 ml-2' alt="Dropdown Icon" />
            </button>
            {/* Dropdown Menu */}
            {showDropdown && (
              <div className='absolute top-16 bg-white dark:bg-neutral-700 border rounded-md shadow-md w-44'>
                <ul className="py-2">
                  {["Newest to Oldest", "Oldest to Newest", "Trending", "Defualt"].map((option) => (
                    <li
                      key={option}
                      className='px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer'
                      onClick={() => handleSortChange(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='py-10'>
          <NewsCard news={news} />
        </div>
      </div>
    </div>
  );
};

export default Home;
