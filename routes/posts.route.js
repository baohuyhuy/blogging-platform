import { Router } from 'express';
import { validate } from '../middlewares/validation.js';
import { createPostSchema, updatePostSchema } from '../schemas/post.schema.js';
import {
  createPostController,
  updatePostController,
} from '../controllers/posts.controller.js';

const router = Router();

router.post('/', validate(createPostSchema), createPostController);
router.put('/:id', validate(updatePostSchema), updatePostController);
// router.get('/', getPostsController);
// router.get('/:id', getPostController);
// router.put('/:id', updatePostController);
// router.delete('/:id', deletePostController);

export default router;
