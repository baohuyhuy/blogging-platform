import {
  createPost,
  updatePost,
  checkPostExists,
  deletePost,
  getPost,
  listPosts,
} from '../models/post.model.js';

export const createPostController = async (req, res) => {
  const { title, content, category, tags } = req.body;
  const post = await createPost(title, content, category, tags);
  res.status(201).json(post);
};

export const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { title, content, category, tags } = req.body;
  if (!(await checkPostExists(id))) {
    return res.status(404).json({
      status: 'fail',
      message: 'Post not found',
    });
  }
  const post = await updatePost(id, title, content, category, tags);
  res.status(200).json(post);
};

export const deletePostController = async (req, res) => {
  const { id } = req.params;
  if (!(await checkPostExists(id))) {
    return res.status(404).json({
      status: 'fail',
      message: 'Post not found',
    });
  }
  await deletePost(id);
  res.status(204).send();
};

export const getPostController = async (req, res) => {
  const { id } = req.params;
  if (!(await checkPostExists(id))) {
    return res.status(404).json({
      status: 'fail',
      message: 'Post not found',
    });
  }
  const post = await getPost(id);
  res.status(200).json(post);
};

export const listPostsController = async (req, res) => {
  const { term } = req.locals.query;
  const posts = await listPosts(term);
  res.status(200).json(posts);
};
