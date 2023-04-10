import { Schema } from 'joi';
import { NextFunction, Request, Response } from 'express';

export default function schemaValidation(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((detail) => detail.message);
            return res.status(422).send(errors);
        }
        next();
    };
};