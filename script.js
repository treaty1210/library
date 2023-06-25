//Query Selectors
let newBookBtn = document.querySelector("#newBook");

//Library array
let myLibrary = []; 


//Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#readStatus").value;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary)
}

//Button to display the form
newBookBtn.addEventListener("click", () => {
    let newBookForm = document.querySelector("#bookForm");
    newBookForm.style.display = "block";
})

//Button to add filled out book form to the library
document.querySelector("#bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
})