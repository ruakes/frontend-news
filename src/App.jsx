import "./App.css";
import Header from "../components/Header"
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import ArticlesList from "../components/ArticlesList"
import ArticleCard from "../components/ArticleCard";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/articles' element={<ArticlesList />}/>
        <Route path='/articles/:article_id' element={<ArticleCard />}/>
      </Routes>
    </>
  )
}

export default App
