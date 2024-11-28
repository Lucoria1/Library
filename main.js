window.addEventListener("load", (event)=> {

const myLibrary = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(this.read === true){
            return `${this.title} by ${this.author}, ${this.pages} pages, has been read`
        } else {return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`}
    }
}

function addBookToLibrary (book) {
    myLibrary.push(book)
}

const book1 = new Book ("Guess How Much I Love You", "Sam McBratney", 32, true)

addBookToLibrary (book1);

const addBookBtn = document.querySelector("#addBook")

addBookBtn.addEventListener("click", (event) => {
    console.log("hello")
})
})