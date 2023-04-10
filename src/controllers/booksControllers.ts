import { Request, Response, NextFunction } from "express";
import { Book } from "../protocols/index.js";
import bookServices from "../services/bookServices.js";

const wishList=async ( req: Request, res: Response, next: NextFunction ) => {
    try{
        const {books}= await bookServices.list();

        res.status(200).send({books});
    }catch(err){
        next(err);
    }
};

const newBook= async (req: Request, res: Response, next: NextFunction ) => {
    const {title, author}= req.body as Record<string, string>;

    try{
        await bookServices.add({title, author});

        res.sendStatus(200);
    }catch(err){
        next(err);
    }
};

const putBook= async ( req: Request, res: Response, next: NextFunction ) => {
    const {id, title, author} = req.body as Book;

    try{
        await bookServices.putBook({title, author, id});

        res.sendStatus(200);
    }catch(err){
        next(err);
    }
};

const deleteBook = async  ( req: Request, res: Response, next: NextFunction ) => {
    const {id} = req.body as Book;

    try{
        await bookServices.deleteBook({id});

        res.sendStatus(200);
    }catch(err){
        next(err);
    }
};

export default { wishList, newBook, putBook, deleteBook };
