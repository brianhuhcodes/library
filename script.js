

const button = document.querySelector('#submit')
const authorinput = document.querySelector('input[name="author"]')
const titleinput = document.querySelector('input[name="title"]')
const pageinput = document.querySelector('input[name="page"]')
const readinput = document.querySelector('input[name="read"]')
const notreadinput = document.querySelector('input[name="notread"]')

button.addEventListener("click", (e) => {
  addBookToLibrary(authorinput.value, titleinput.value, pageinput.value, readinput.value)
  e.preventDefault();
}
)



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

    // this.info = function() {
    //     return (`${title} by ${author}, ${page}, ${read}`)
    // }

}

function valueReset() {
  authorinput.value = ""
  titleinput.value = ""
  pageinput.value = ""
  readinput.value = ""
}

function addBookToLibrary(a, b, c, d) {
    let obj = new Book(a, b, c, d)
    myLibrary.push(obj)
    valueReset()
    createFromInput()
    //return myLibrary
  // do stuff here
}


//addBookToLibrary("a", "b", 'c', 'd')
// addBookToLibrary(q,w,e,r)


const libGen = document.querySelector('.library-generated')





function createFromInput() {
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
  
  author.textContent += `Author: ${myLibrary[i].author}`
  title.textContent += `Title: ${myLibrary[i].title}`
  page.textContent += `Page: ${myLibrary[i].page}`
  read.textContent += `Read: ${myLibrary[i].read}`
  libGen.appendChild(added)
  added.appendChild(author)
  added.appendChild(title)
  added.appendChild(page)
  added.appendChild(read)

}
}








// console.log(myLibrary)


// console.table(myLibrary)
