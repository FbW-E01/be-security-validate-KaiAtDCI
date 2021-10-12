import { body, header } from 'express-validator';

export const postBirdSightingValidator = [
  body("species").isLength({min: 3}).withMessage("species-too-short"),
  body("species").isLength({max: 28}).withMessage("species-too-long"),
  body("notes").isLength({max: 140}).withMessage("notes-too-long"),
  body("estimatedAmount").isNumeric().withMessage("estimatedAmount-not-numeric")
];


