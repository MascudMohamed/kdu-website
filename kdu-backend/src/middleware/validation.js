import { body, validationResult } from 'express-validator';

export const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({
        field: err.param,
        message: err.msg
      }))
    });
  };
};

export const validateUser = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('profile.firstName').notEmpty(),
  body('profile.lastName').notEmpty()
];

export const validatePublication = [
  body('title').notEmpty().trim(),
  body('year').isInt({ min: 1900, max: new Date().getFullYear() }),
  body('authors').isArray().notEmpty()
];