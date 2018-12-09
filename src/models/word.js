var Word = function(){
    this.word = ""
    this.language = "" 
    this.pronunciation = ""
    this.correctAnswered = ""
    this.wrongAnswered = ""
}

Word.prototype.setWord = function(word){
    this.word = word
}

Word.prototype.setLanguage = function(language){
    this.language = language
}

Word.prototype.setPronunciation = function(pronunciation){
    this.pronunciation = pronunciation
}

Word.prototype.getWord = function() {
    return this.word
}

Word.prototype.getLanguage = function(){
    return this.language
}

Word.prototype.getPronunciation = function() {
    return this.pronunciation
}