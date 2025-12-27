import {
  createPost,
  updatePost,
  checkPostExists,
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
