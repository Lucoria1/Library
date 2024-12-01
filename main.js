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
        if(document.querySelector(`#bookCont${i}`) !== null){
            return
        }

        const div = document.createElement("div");
        div.setAttribute("id", `bookCont${i}`);
        div.setAttribute("class", `bookCard ${i}`);
        document.getElementById("bookDisplay").appendChild(div);

        const title = document.createElement("h3");
        title.innerHTML = book.title;
        document.getElementById(`bookCont${i}`).appendChild(title);

        const author = document.createElement("h4");
        author.innerHTML = `Author: ${book.author}`;
        document.getElementById(`bookCont${i}`).appendChild(author);

        const pages = document.createElement("h4");
        pages.innerHTML = `Pages: ${book.pages}`;
        document.getElementById(`bookCont${i}`).appendChild(pages);
        
        const read = document.createElement("h4");
        if(book.read === true){
            read.innerHTML = `Read: has been read`} else {
                read.innerHTML = `Read: has not been read`
            };        
        document.getElementById(`bookCont${i}`).appendChild(read);

        const rmBtn = document.createElement("button");
        rmBtn.setAttribute("id", i);
        rmBtn.setAttribute("class", "rmBtn");
        rmBtn.innerHTML = "Remove";
        document.getElementById(`bookCont${i}`).appendChild(rmBtn);

        rmBtn.addEventListener("click", () => {
            console.log(rmBtn.id);
            console.log(`bookCont${rmBtn.id}`);
            myLibrary.splice(rmBtn.id, 1);
            document.getElementById(`bookCont${rmBtn.id}`).remove();
            updateId();
        })

    })
};

//Manual entry

let book1 = new Book ("Guess How Much I Love You", "Sam McBratney", 32, true)

addBookToLibrary(book1);

let book2 = new Book ("The Very Hungry Caterpillar", "Eric Carle", 22, true)

addBookToLibrary(book2);

loopBooks();

//Manual Entry


const addBookBtn = document.querySelector("#addBook");
const dialog = document.querySelector("#dialog");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");

addBookBtn.addEventListener("click", () => {
    dialog.showModal();
})

cancelBtn.addEventListener("click", () => {
    document.getElementById("form").reset();
})

confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let book = new Book (titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    addBookToLibrary(book);
    loopBooks();
    document.getElementById("form").reset();
})

function updateId () {
    const id = document.querySelectorAll(".rmBtn");
    id.forEach((id, i) =>{
       id.setAttribute("id", `${i}`) 
    })

    const cont = document.querySelectorAll(".bookCard");
    cont.forEach((cont, i) =>{
       cont.setAttribute("id", `bookCont${i}`) 
    })

}


})