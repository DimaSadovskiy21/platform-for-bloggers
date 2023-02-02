import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://nest-js-blogs-api-muzyk0.vercel.app/blog-platform/',
  
});

export const blogsAPI = {
  getBlogs() {
    return instance.get('blogs');
  },
};

export const postsAPI = {
  getPosts() {
    return instance.get('posts');
  },
  getPost(id: string) {
    return instance.get(`posts/${id}`);
  },
};
