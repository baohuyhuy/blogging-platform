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

export const getPost = async (id) => {
  const post = await db('posts').where('id', id).first();
  return post;
};

export const listPosts = async (term) => {
  if (term) {
    return await db('posts')
      .select('*')
      .where('title', 'ilike', `%${term}%`)
      .orWhere('content', 'ilike', `%${term}%`)
      .orWhere('category', 'ilike', `%${term}%`)
      .orderBy('created_at', 'desc')
      .orderBy('id', 'desc');
  }
  return await db('posts')
    .select('*')
    .orderBy('created_at', 'desc')
    .orderBy('id', 'desc');
};
