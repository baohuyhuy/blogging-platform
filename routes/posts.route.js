import { Router } from 'express';
import { validate } from '../middlewares/validation.js';
import {
  createPostSchema,
  deletePostSchema,
  updatePostSchema,
} from '../schemas/post.schema.js';
import {
  createPostController,
  updatePostController,
  deletePostController,
} from '../controllers/posts.controller.js';

const router = Router();

router.post('/', validate(createPostSchema), createPostController);
router.put('/:id', validate(updatePostSchema), updatePostController);
router.delete('/:id', validate(deletePostSchema), deletePostController);
// router.get('/', getPostsController);
// router.get('/:id', getPostController);
// router.put('/:id', updatePostController);
// router.delete('/:id', deletePostController);

export default router;
