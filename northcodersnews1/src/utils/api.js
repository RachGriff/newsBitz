import axios from "axios";

const BASE_URL = "https://peaceful-temple-55135.herokuapp.com/api";
const extract = 150;

export const getAllArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.articles.map(articles => ({
    id: articles._id,
    votes: articles.votes,
    title: articles.title,
    shortDescription: articles.body.slice(0, extract),
    topic: articles.belongs_to,
    createdBy: {
      id: articles.created_by._id,
      name: articles.created_by.name
    },
    commentCount: articles.commentCount
  }));
};

export const getArticle = async id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}`);
  const articleToDisplay = data.article;
  return {
    id: articleToDisplay._id,
    votes: articleToDisplay.votes,
    title: articleToDisplay.title,
    topic: articleToDisplay.belongs_to,
    article: articleToDisplay.body,
    createdBy: {
      id: articleToDisplay.created_by._id,
      username: articleToDisplay.created_by.username,
      name: articleToDisplay.created_by.name,
      avatarURL: articleToDisplay.created_by.avatar_url
    },
    commentCount: articleToDisplay.commentCount
  };
};
