import { Book } from './../protocols/index.js';
import notFound from "../erros/index.js";
import booksRepositories from "../repositories/booksRepositories.js";

const list= async ()=> {
    const {rows: books, rowCount}= await booksRepositories.listBooks();

    if(rowCount===0){
        throw notFound();
    }

    return {books};
};

const add= async ({title, author}: Book)=> {
    await booksRepositories.addBook({title, author});
};

const putBook= async ({id, title, author}: Book)=> {
    const {rowCount}= await booksRepositories.findBook({id});

    if(rowCount===0){
        throw notFound();
    }

    await booksRepositories.updateBook({id, title, author});
};

const deleteBook = async ({id}: Book)=> {
    const {rowCount}= await booksRepositories.findBook({id});
    
    if(rowCount===0){
        throw notFound();
    }

    await booksRepositories.deleteBook({id});
};

export default { list, add, putBook, deleteBook };