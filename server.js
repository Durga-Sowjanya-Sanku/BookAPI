const express = require('express');
app = express();

const PORT = 8080;
app.use(express.json());

let books = [
    {id:1, title: 'The Silent Patient', author: 'Alex'},
    {id:2, title: 'Verity', author: 'Lowen'},
    {id:3, title: 'C Programming', author: 'Balaguru Swamy'},
];

//Home Route
app.get('/', (request, response) => {
    response.json({
        status : 'success',
        message: 'Welcome to express js application'
    });
})

//Fetch books
app.get('/books', (request, response) => {
    response.json({
        status: 'success',
        message: 'Hurray, books fetched succesfully',
        data: books
    });
})

//Fetch a particualr books
app.get('/books/:id', (request, response) => {
    
    const book_id = parseInt(request.params.id);
    const book = books.find((book) => book.id === book_id);
    response.json({
        status: 'success',
        message: 'Hurray, books fetched succesfully',
        data: book
    });
})

//Add a book
app.post('/books', (request, response) => {
    const book = request.body;
    books.push(book);
    response.json({
        status: 'success',
        message: 'Book added Succesfully',
        data : book
    });
});


// Delete a book
app.delete('/books/:id', (request, response) => {
    const book_id = parseInt(request.params.id);

    books = books.filter((book) => book.id !== book_id);
    response.json({
        status: 'success',
        message: 'Book deleted Succesfully',
        data : books
    });
})


//start server
app.listen(PORT, () => {
    console.log(`The server is running on the PORT ${PORT}`);
})