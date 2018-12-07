var ListWords = () =>{
    this.words = []
    this.name = ""
}

ListWords.prototype.setName = (name) => {
    this.name = name
}

ListWords.prototype.setWords = (words) => {
    this.words = words
}

ListWords.prototype.getName = () => {
    return this.name
}

ListWords.prototype.getWords = () => { 
    return this.words
}

ListWords.prototype.isItValidList = () => {
    return this.words.length <= 50
}