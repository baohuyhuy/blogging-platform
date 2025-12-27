import z from 'zod';

export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          status: 'fail',
          errors: z.treeifyError(error),
        });
      }
      next(error);
    }
  };
};
