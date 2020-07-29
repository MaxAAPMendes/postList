import axios from 'axios';

const ApiPosts = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
});
const ApiUsers = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users'
});

export {ApiPosts, ApiUsers};