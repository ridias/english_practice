const PracticeFailed = require("./PracticeFailed")
const PracticeFinished = require("./PracticeFinished")
const Timer = require("./Timer")

var PracticeStarted = function(practice) {
    console.log("Practice is starting...")
    this.timer = new Timer(10)
    this.practice = practice
}

PracticeStarted.prototype.go = function(){
    var myself = this
    let interval = setInterval(() => {
        myself.timer.decrement()
        console.log("Timer: " + myself.timer.getSeconds())
        if(myself.timer.getSeconds() <= 0){ 
            clearInterval(interval)
            myself.practice.change(new PracticeFailed(this.practice))
        }else if(myself.practice.getCurrentWord() == myself.practice.getListWords().length){
            clearInterval(interval)
            myself.practice.change(new PracticeFinished(this.practice))
        }
    }, 1000)
}

PracticeStarted.prototype.isItCorrectAnswer = function(index, word){
    word = word.toLowerCase()
    this.state.listWords[index][1] == word ? true : false
}

PracticeStarted.prototype.nextWord = function(){
    this.state.currentWord += 1
}

module.exports = PracticeStarted