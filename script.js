

const button = document.querySelector('#submit')
const authorinput = document.querySelector('input[name="author"]')
const titleinput = document.querySelector('input[name="title"]')
const pageinput = document.querySelector('input[name="page"]')

button.addEventListener("click", (e) => {
  const readinput = document.querySelector('input[name="read"]:checked')

  addBookToLibrary(authorinput.value, titleinput.value, pageinput.value, readinput.value)
  e.preventDefault();
}
)



let myLibrary = [
    {
      author: 'J.R.R. Tolkien',
      title: 'The Hobbit',
      page: '295 pages',
      read: 'No'
    },
    {
      author: 'John Steinbeck',
      title: 'Cannery Row',
      page: '181 pages',
      read: 'No'
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
  document.getElementById('yes').checked = false
  document.getElementById('no').checked = false

}

function addBookToLibrary(a, b, c, d) {
    let obj = new Book(a, b, c, d)
    myLibrary.push(obj)
    valueReset()
    removeExistingDiv()
    createFromInput()
    //return myLibrary
  // do stuff here
}


//addBookToLibrary("a", "b", 'c', 'd')


const libGen = document.querySelector('.library-generated')


function removeExistingDiv() {
  document.querySelectorAll("div.added").forEach(function(added) {libGen.removeChild(added)})
}




function createFromInput() {
for (let i=0; i<myLibrary.length; i++) {
  const added = document.createElement('div')
  const author = document.createElement('div')
  const title = document.createElement('div')
  const page = document.createElement('div')
  const read = document.createElement('div')
  const change = document.createElement('button')
  const del = document.createElement('button')

  added.classList.add('added')
  author.classList.add('author')
  title.classList.add('title')
  page.classList.add('page')
  read.classList.add('read')
  change.classList.add('change')
  del.classList.add('del')
  
  author.textContent += `Author: ${myLibrary[i].author}`
  title.textContent += `Title: ${myLibrary[i].title}`
  page.textContent += `Page: ${myLibrary[i].page}`
  read.textContent += `Read?: ${myLibrary[i].read}`
  change.textContent += `Switch the read status`
  del.textContent += `Delete`
  libGen.appendChild(added)
  added.appendChild(author)
  added.appendChild(title)
  added.appendChild(page)
  added.appendChild(read)
  added.appendChild(change)
  added.appendChild(del)

}
}


createFromInput() //initial run of the myLibrary array



const dels = document.querySelectorAll('.del')
const changes = document.querySelectorAll('.change')


dels.forEach((del) => {
del.addEventListener('click', function(e) {e.target.parentNode.remove()})
})

//to do list
//add an option to change an existing array.read status
//connect it to a local or cloud storage


