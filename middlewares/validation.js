import z from 'zod';

export const validate = (schema) => {
  return async (req, res, next) => {
    const result = await schema.safeParseAsync(req);
    if (!result.success) {
      return res.status(400).json({
        status: 'fail',
        ...z.flattenError(result.error),
      });
    }

    req.body = result.data.body;
    req.params = result.data.params;

    next();
  };
};
