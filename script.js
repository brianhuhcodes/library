let myLibrary = [
    {
      author: 'J.R.R. Tolkien',
      title: 'The Hobbit',
      page: '295 pages',
      read: 'not read yet'
    },
    {
      author: 'John Steinbeck',
      title: 'Cannery Row',
      page: '181 pages',
      read: 'not read yet'
    }
];

function Book(author, title, page, read) {
    this.author = author
    this.title = title
    this.page = page + " pages"
    this.read = read
    console.log(author)
    // this.info = function() {
    //     return (`${title} by ${author}, ${page}, ${read}`)
    // }

}


function addBookToLibrary(a, b, c, d) {
    let obj = new Book(a, b, c, d)
    myLibrary.push(obj)
    //return myLibrary
  // do stuff here
}


// addBookToLibrary("a", "b", 'c', 'd')
// addBookToLibrary(q,w,e,r)

const libGen = document.querySelector('.library-generated')



for (let i=0; i<myLibrary.length; i++) {
  const added = document.createElement('div')
  const author = document.createElement('div')
  const title = document.createElement('div')
  const page = document.createElement('div')
  const read = document.createElement('div')

  added.classList.add('added')
  author.classList.add('author')
  title.classList.add('title')
  page.classList.add('page')
  read.classList.add('read')
  
  author.innerHTML += `Author: ${myLibrary[i].author}`
  title.innerHTML += `Title: ${myLibrary[i].title}`
  page.textContent += `Page: ${myLibrary[i].page}`
  read.textContent += `Read: ${myLibrary[i].read}`
  libGen.appendChild(added)
  added.appendChild(author)
  added.appendChild(title)
  added.appendChild(page)
  added.appendChild(read)

}

const button = document.querySelector('#submit')
const author = document.querySelector('input[name="author"]')
const title = document.querySelector('input[name="title"]')
const page = document.querySelector('input[name="page"]')
const read = document.querySelector('input[name="read"]')
const notread = document.querySelector('input[name="notread"]')

button.addEventListener("click", () =>
Book(author.textContent, title.textContent, page.textContent, read.textContent)
)
// console.log(myLibrary)


// console.table(myLibrary)