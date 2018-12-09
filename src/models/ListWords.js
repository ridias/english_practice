var ListWords = function() {
    this.words = []
    this.name = ""
}

ListWords.prototype.setName = function(name) {
    this.name = name
}

ListWords.prototype.setWords = function(words) {
    this.words = words
}

ListWords.prototype.getName = function() {
    return this.name
}

ListWords.prototype.getWords = function() { 
    return this.words
}

ListWords.prototype.isItValidList = function() {
    return this.words.length <= 50
}