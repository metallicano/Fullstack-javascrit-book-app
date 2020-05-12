class BookService {
    constructor(){
        this.URI = '/api/books';
    }
    //obtener los libros en el backend
    async getBooks(){
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }
    //para guardar libros
    async postBook(book){
        const res = await fetch(this.URI,{
            method: 'POST',
            body: book
        });
        const data = await res.json();
        
    }
    //para borrar libro
    async deleteBook(bookId){
        const res = await fetch(`${this.URI}/${bookId}`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(data);
    }
}

export default BookService;