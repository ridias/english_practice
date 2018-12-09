const PracticeStarted = require("./PracticeStarted")

var Practice = function() {
    console.log("Practice created..")
    this.currentState = new PracticeStarted(this)
    this.listWords = ["1"]
    this.correctAnswers = 0
    this.wrongAnswers = 0
    this.currentWord = 0
}

Practice.prototype.change = function(state){
    this.currentState = state
    this.currentState.go()
}

Practice.prototype.start = function() {
    this.currentState.go()
}

Practice.prototype.setCorrectAnswers = function(correctAnswers){
    this.correctAnswers = correctAnswers
}

Practice.prototype.setWrongAnswers = function(wrongAnswers){
    this.wrongAnswers = wrongAnswers
}

Practice.prototype.setCurrentWord = function(currentWord){
    this.currentWord = currentWord
}

Practice.prototype.setListWords = function(list){
    this.listWords = list
}

Practice.prototype.getCorrectAnswers = function(){
    return this.correctAnswers
}

Practice.prototype.getWrongAnswers = function(){
    return this.wrongAnswers
}

Practice.prototype.getCurrentWord = function(){
    return this.currentWord 
}

Practice.prototype.getListWords = function(){
    return this.listWords
}

let testStart = new Practice()
testStart.start()