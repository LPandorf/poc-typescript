import joi from "joi";

export const bookSchema=joi.object({
    title: joi.string().required(),
    author: joi.string().required()
});