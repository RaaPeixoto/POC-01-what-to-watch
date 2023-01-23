import Joi from "joi";

export const moviesSchema = Joi.object({
  title: Joi.string().required(),
  image: Joi.string().required(),
  description:Joi.string().required(),
  stars:Joi.number().required(),
  plataformId:Joi.number().required(),
  genreId:Joi.number().required()

});