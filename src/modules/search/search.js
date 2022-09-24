class Search {

  constructor (parent) {
    console.log(parent)
  }

  static create (parent) {
    return new Search(parent)
  }
}

export default Search