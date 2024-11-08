import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-news-tssw.onrender.com/api",
  });

const getArticles = () => {
    return api.get('/articles')
    .then(({data}) => {
        return data.articles
    })
}

const getArticlesById = (article_id) => {
    return api.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data.article
    })
}

const getArticleComments = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments
    })
}

const patchArticleVotes = (article_id, incVotes) => {
    return axios.patch(`https://backend-news-tssw.onrender.com/api/articles/${article_id}`, incVotes)
    .then(({data}) => {
        return data.article
    })
}

const postComment = (article_id, newComment) => {
    return axios.post(`https://backend-news-tssw.onrender.com/api/articles/${article_id}/comments`, newComment)
    .then(({data}) => {
        return data.addedComment
    })
}

export {getArticles, getArticlesById, getArticleComments, patchArticleVotes, postComment };