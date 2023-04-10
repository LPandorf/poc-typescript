import connection from "../configs/database.js";
import { Book } from "../protocols/index.js";

const listBooks= async ()=> {
    return connection.query(
        `SELECT * FROM books`,
        []
    );
};

const addBook= async ({title, author}: Book)=> {
    return connection.query(
        `INSERT INTO books (title, author) VALUES ($1, $2)`,
        [title, author]
    );
};

const findBook= async ({id}: Book)=> {
    return connection.query(
        `SELECT * FROM books WHERE id=$1`,
        [id]
    );
};

const updateBook= async ({id, title, author}: Book) => {
    return connection.query(
        `UPDATE books SET title=$1, author=$2 WHERE id = $3`,
        [title, author, id]
    );
};

const deleteBook= async ({id}: Book) => {
    return connection.query(
        `DELETE FROM books WHERE id=$1`,
        [id]
    );
};

export default {listBooks, addBook, findBook, updateBook, deleteBook};
