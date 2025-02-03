import React from "react"
import { BrowserRouter as  Router,Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SavedNews from "./Pages/SavedNews"
import Article from "./Pages/Article"


function App() {


  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/saved-news' element={<SavedNews/>}  />
        <Route path='/article/:id' element={<Article/>}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
