var Timer = function(seconds) {
    this.seconds = seconds
}

Timer.prototype.setSeconds = function(seconds){
    this.seconds = seconds
}

Timer.prototype.getSeconds = function(){
    return this.seconds
}

Timer.prototype.decrement = function() {
    this.seconds -= 1
}

Timer.prototype.isTimerFinished = function() {
    return this.seconds <= 0;
}

module.exports = Timer
