import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-news-tssw.onrender.com/api",
  });

const getArticles = () => {
    return api.get('/articles')
    .then(({data}) => {
        return data.articles
    })
    .catch((err) => {
        console.log(err)
    })
}

const getArticlesById = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data.article
    })
    .catch((err) => {
        console.log(err)
    })
}

const getArticleComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments
    })
    .catch((err) => {
        console.log(err)
    })
}

export {getArticles, getArticlesById, getArticleComments };