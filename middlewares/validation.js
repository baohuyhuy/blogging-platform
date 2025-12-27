import z from 'zod';

export const validate = (schema) => {
  return async (req, res, next) => {
    const result = await schema.safeParseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    if (!result.success) {
      return res.status(400).json({
        status: 'fail',
        ...z.flattenError(result.error),
      });
    }

    if (result.data.query) {
      req.locals = { query: result.data.query };
    }
    if (result.data.body) {
      req.body = result.data.body;
    }
    if (result.data.params) {
      req.params = result.data.params;
    }

    next();
  };
};
