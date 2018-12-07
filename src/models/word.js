var Word = function(){
    this.word = ""
    this.language = "" 
    this.pronunciation = ""
}

Word.prototype.setWord = (word) => {
    this.word = word
}

Word.prototype.setLanguage = (language) =>{
    this.language = language
}

Word.prototype.setPronunciation = (pronunciation) =>{
    this.pronunciation = pronunciation
}

Word.prototype.getWord = () => {
    return this.word
}

Word.prototype.getLanguage = () =>{
    return this.language
}

Word.prototype.getPronunciation = () => {
    return this.pronunciation
}