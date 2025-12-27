import { Router } from 'express';
import { validate } from '../middlewares/validation.js';
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
  getPostSchema,
  listPostsSchema,
} from '../schemas/post.schema.js';
import {
  createPostController,
  updatePostController,
  deletePostController,
  getPostController,
  listPostsController,
} from '../controllers/posts.controller.js';

const router = Router();

router.post('/', validate(createPostSchema), createPostController);
router.put('/:id', validate(updatePostSchema), updatePostController);
router.delete('/:id', validate(deletePostSchema), deletePostController);
router.get('/', validate(listPostsSchema), listPostsController);
router.get('/:id', validate(getPostSchema), getPostController);

export default router;
