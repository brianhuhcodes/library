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
    this.page = page
    this.read = read
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


//addBookToLibrary(a, b, c, d)
// addBookToLibrary(q,w,e,r)
console.log(myLibrary)


console.table(myLibrary)