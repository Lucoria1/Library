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
};

function addBookToLibrary (book) {
    myLibrary.push(book)
};


function loopBooks () {
    myLibrary.forEach((book, i)=>{
        const div = document.createElement("div");
        div.setAttribute("id", `bookCont ${i+1}`);
        div.setAttribute("class", "bookCard");
        document.getElementById("bookDisplay").appendChild(div);

        const title = document.createElement("h3");
        title.innerHTML = book.title;
        document.getElementById(`bookCont ${i+1}`).appendChild(title);

        const author = document.createElement("h4");
        author.innerHTML = `Author: ${book.author}`;
        document.getElementById(`bookCont ${i+1}`).appendChild(author);

        const pages = document.createElement("h4");
        pages.innerHTML = `Pages: ${book.pages}`;
        document.getElementById(`bookCont ${i+1}`).appendChild(pages);
        
        const read = document.createElement("h4");
        if(book.read === true){
            read.innerHTML = `Read: has been read`} else {
                read.innerHTML = `Read: has not been read`
            };        
        document.getElementById(`bookCont ${i+1}`).appendChild(read);
    })
};

let book1 = new Book ("Guess How Much I Love You", "Sam McBratney", 32, true)

addBookToLibrary(book1);

let book2 = new Book ("The Very Hungry Caterpillar", "Eric Carle", 22, true)

addBookToLibrary(book2);

const addBookBtn = document.querySelector("#addBook")

loopBooks();

addBookBtn.addEventListener("click", (event) => {
    console.log("hello")

})
})