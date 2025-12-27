import db from '../config/db.js';

export const createPost = async (title, content, category, tags) => {
  const post = await db('posts')
    .insert({ title, content, category, tags })
    .returning('*');
  return post;
};

export const updatePost = async (id, title, content, category, tags) => {
  const post = await db('posts')
    .where('id', id)
    .update({ title, content, category, tags })
    .returning('*');
  return post;
};

export const checkPostExists = async (id) => {
  const post = await db('posts').where('id', id).first();
  return !!post;
};

export const deletePost = async (id) => {
  await db('posts').where('id', id).delete();
};
