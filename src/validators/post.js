import { check, param } from "express-validator";
import { validateResult } from "../utils/handleValidator.js";

const validatorCreatePost = [
  check("name").exists().notEmpty(),
  check("description").exists().notEmpty(),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

const validatorGetPost = [
  param("id").isInt(),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

export { validatorCreatePost, validatorGetPost };
