var PracticeFailed = function(practice) {
    console.log("Se ha acabado el tiempo")
    this.practice = practice
}

PracticeFailed.prototype.go = function(){

}

PracticeFailed.prototype.recount = function(){
    return [this.practice.getCorrectAnswers(), this.practice.getWrongAnswers()]
}

module.exports = PracticeFailed