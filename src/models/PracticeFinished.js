var PracticeFinished = function(practice) {
    console.log("Se ha acabado el tiempo")
    this.practice = practice
}

PracticeFinished.prototype.go = function(){

}

PracticeFinished.prototype.recount = function(){
    return [this.practice.getCorrectAnswers(), this.practice.getWrongAnswers()]
}

module.exports = PracticeFinished