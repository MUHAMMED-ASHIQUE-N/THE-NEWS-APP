import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Filter from '../Components/Filter';
import downArrow from "../assets/down-arrow.svg";
import axios from '../Axios';
import { API_KEY } from '../Constans/Constant';
import MainNewsCard from '../Components/MainNewsCard';



const SORT_OPTIONS = ["Newest to Oldest", "Oldest to Newest", "Trending", "Default"];


const Home = () => {
  const [sortOption, setSortOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);

    if (option === "Trending") {
      setCategory("trending"); 
    } else if (option === "Default") {
      setCategory("general"); 
    } else {
      const sortedNews = [...news].sort((a, b) => 
        option === "Oldest to Newest"
          ? new Date(a.published) - new Date(b.published)
          : new Date(b.published) - new Date(a.published)
      );
      setNews(sortedNews);
    }
  };

  const handleFilterChange = (val) => {
    setCategory(val.toLowerCase()); // No need to store an extra filter state
  };

  const fetchNews = useCallback(() => {
    axios.get(`?&category=${category}&language=en&apiKey=${API_KEY}`)
      .then((response) => setNews(response.data.news))
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div className='bg-blue-100 dark:bg-neutral-800 dark:text-white h-auto w-full'>
      <Navbar />
      <Filter onFilterChange={handleFilterChange} />
      <div className='mx-auto w-[80%]'>
        <div className='py-5 flex flex-col md:flex-row justify-center items-center gap-4 relative'>
          <input type="text" className='border md:w-[50%] w-full px-4 py-2 rounded-full' />
          
          <div>
            <button
              className='px-4 py-2 border rounded-full bg-black text-white font-semibold flex items-center justify-center cursor-pointer dark:border-none dark:bg-indigo-600 relative'
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{sortOption || "default"}</span>
              <img src={downArrow} className='w-5 h-5 pt-1 ml-2' alt="Dropdown Icon" />
            </button>
            {showDropdown && (
              <div className='absolute top-16 bg-white dark:bg-neutral-700 border rounded-md shadow-md w-44'>
                <ul className="py-2">
                {SORT_OPTIONS.map((option) => (
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
          <MainNewsCard news={news} />
        </div>
      </div>
    </div>
  );
};

export default Home;
