import axios from "axios";

const BASE_URL = "https://peaceful-temple-55135.herokuapp.com/api";
const extract = 150;

export const getAllArticles = async topicFilter => {
  let result = {};
  if (topicFilter === "") {
    result = await axios.get(`${BASE_URL}/articles`);
  } else {
    result = await axios.get(`${BASE_URL}/topics/${topicFilter}/articles`);
  }

  return result.data.articles.map(articles => ({
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
  const articleResult = await axios.get(`${BASE_URL}/articles/${id}`);
  const commentsResult = await axios.get(`${BASE_URL}/articles/${id}/comments`);
  const articleToDisplay = articleResult.data.article;
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
    comments: commentsResult.data.comments,
    commentCreatedBy: commentsResult.data.comments.created_by
  };
};

export const newLogin = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  return data.user;
};

export const addArticle = async newArticle => {
  const { data } = await axios.post(
    `${BASE_URL}/topics/${newArticle.belongs_to}/articles`,
    newArticle
  );
  return {
    id: data.article._id,
    votes: 0,
    title: data.article.title,
    shortDescription: data.article.body.slice(0, extract),
    topic: data.article.belongs_to,
    createdBy: {
      id: 0,
      name: ""
    },
    commentCount: 0
  };
};

export const voteOnArticle = async (id, direction) => {
  await axios.patch(`${BASE_URL}/articles/${id}?vote=${direction}`);
};

export const voteOnComment = async (id, direction) => {
  await axios.patch(`${BASE_URL}/comments/${id}?vote=${direction}`);
};
