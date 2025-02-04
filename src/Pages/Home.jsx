  import React, { useCallback, useEffect, useState } from 'react';
  import Navbar from '../Components/Navbar';
  import Filter from '../Components/Filter';
  import downArrow from "../assets/down-arrow.svg";
  import axios from '../Axios';
  import { API_KEY } from '../Constans/Constant';
  import MainNewsCard from '../Components/MainNewsCard';
import Footer from '../Components/Footer';

  const SORT_OPTIONS = ["Newest to Oldest", "Oldest to Newest", "Trending", "Default"];

  const Home = () => {
  const [sortOption, setSortOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

 
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
    setCategory(val.toLowerCase());
  };

  const handleSearchChange = (e) => {
   
    
    setSearchQuery(e.target.value.toLowerCase());
    console.log(e.target.value);
  };


  const fetchNews = useCallback(() => {
    setLoading(true);
    axios.get(`?category=${category}&keywords=${searchQuery}&language=en&apiKey=${API_KEY}`)
      .then((response) => {
        console.log("Fetched News:", response.data.news);
        setNews(response.data.news || []); 
      })
      .catch((error) => console.error("Error fetching news:", error))
      .finally(() => setLoading(false));
  }, [category, searchQuery]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div className='bg-blue-100 dark:bg-black dark:text-white h-auto w-full'>
      <Navbar />
      <Filter onFilterChange={handleFilterChange} />

      <div className='mx-auto w-[80%] py-5 flex flex-col md:flex-row justify-center items-center gap-4 relative'>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search news..."
          className='border md:w-[50%] w-full px-4 py-2 rounded-full'
        />
        <button
          onClick={fetchNews}
          className="px-4 py-2 bg-indigo-600 text-white rounded-full"
        >
          Search
        </button>

        <div>
          <button
            className='px-4 py-2 border rounded-full bg-black text-white font-semibold flex items-center cursor-pointer dark:border-none dark:bg-indigo-600 relative'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span>{sortOption || "Default"}</span>
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

      <div className='mx-auto w-[90%] md:w-[80%]'>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="w-14 h-14 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : news.length > 0 ? (
          <div className='py-10'>
            <MainNewsCard news={news} />
          </div>
        ) : (
          <div className="py-10 text-center text-lg text-gray-500">
            No articles found. Try another search!
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
