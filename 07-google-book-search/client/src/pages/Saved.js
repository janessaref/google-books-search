import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import APIbooks from "../utils/booksAPI";
import SavedBooks from "../components/SavedBooks";

function Saved() {
    const [books, setBooks] = useState([]);

    const deleteBooks = (id) => {
        // console.log(books);
        // console.log("working");
        // console.log(id);
        APIbooks.deleteBook(id)
        .then((res)=>{
           console.log(res);
        })
    }

    useEffect(() => {
        APIbooks.getApiBooks()
        .then(res=>setBooks(res.data))
        // console.log(books)
        }, [books])

    return(
        <div className="mb-5">
            <Navbar />
            <Jumbotron />
            <SavedBooks books={books} deleteBooks={deleteBooks}/>
        </div>
    )
}

export default Saved;