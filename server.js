import  express  from "express";
import { BookRouter } from "./routes/api/book.js";
import * as dotenv from 'dotenv';
dotenv.config();
import debug from 'debug';

//create a debug channel called app:Server
const debugServer = debug('app:Server')

const app = express();


//middleware
//allow form data

app.use(express.urlencoded({extended: true}))
app.use('/api/books', BookRouter);

// const books = [
    
//     {"title":"Country Bears, The","author":"Vince Glader","publication_date":"10/25/1907","genre":"mystery","_id":1},
//     {"title":"Secret Things (Choses secrètes)","author":"Betteanne Copley","publication_date":"8/28/1978","genre":"non-fiction","_id":2},
//     {"title":"Fitna","author":"Heall Markham","publication_date":"5/31/1936","genre":"non-fiction","_id":3},
//     {"title":"Words, The","author":"Kelly Benech","publication_date":"11/9/1958","genre":"non-fiction","_id":4},
//     {"title":"Muppet Christmas: Letters to Santa, A","author":"Natala Amar","publication_date":"1/18/1914","genre":"non-fiction","_id":5}

// ]


//default route
app.get('/', (req,res)=> {
    res.send('Hello world')
    debugServer('Hello from upgraded console.log()')
});


//get all books
// app.get('/books', (req,res)=> {
//     res.status(200).json(books);
// });


// app.get('/book/:id', (req,res)=> {
//     const id = req.params.id;
//     const book = books.find(book => book._id == id)

//     if (books) {
//         res.status(200).send(book);
        
//     } else {
        
//         res.status(404).send({message:`Book ${id} not found`});
        
//     }
 

// });

//update book by ID

//update can use put or post

// app.put('/book/:id', (req,res)=> {

//     const id = req.params.id;
//     const currentBook = books.find(book => book._id == id);
    

//     const updatedBook = req.body;

//     if (currentBook) {
//         for (const key in updatedBook) {
//             if (currentBook[key] != updatedBook[key]) {
//                 currentBook[key] = updatedBook[key];
//             }
//         }

//         console.table(`The current book after up ${currentBook}`);

//         const index = books.findIndex(book => book._id == id);

//         console.log(`The index is ${index}`);
//         if (index != -1) {
//             books[index] = currentBook;
//         }

//         res.status(200).send(`Book ${id} updated ${currentBook.title}`)
//     }

//     //save current book back into array

  

//    // res.json(updatedBook);
// });

//add a new book to array

// app.post('/books/add', (req,res)=> {

// const newBook = req.body;



// if (newBook) {

//     const id = books.length + 1;
// newBook._id = id;
// books.push(newBook);

// res.status(200).json({message: `Book ${newBook.title} added`});
    
// } else {
    
// res.status(404).json({message: `Error adding books`});
// }



// })


//delete book
app.delete('/books/:id', (req,res)=> {
    const id = req.params.id;
    const index = books.findIndex(book => book._id == id);

    if (index != -1) {
        books.splice(index,1);
        res.status(200).send(`Book ${id} deleted`)
        
    } else {
        res.status(404).send({message: `Book ${id} not found`})
        
    }


});






//listen port 3003
app.listen(3003, ()=> {
    console.log('server is http://localhost:3003')
});