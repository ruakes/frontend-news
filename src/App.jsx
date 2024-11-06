import "./App.css";
import Header from "../components/Header"
import { Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import ArticlesList from "../components/ArticlesList";
import IndividualArticle from "../components/IndividualArticle";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/articles' element={<ArticlesList />}/>
        <Route path='/articles/:article_id' element={<IndividualArticle />}/>
      </Routes>
    </>
  )
}

export default App
