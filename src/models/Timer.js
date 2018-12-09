var Timer = function() {
    this.seconds = 0
    this.interval = null
}

Timer.prototype.setSeconds = function(seconds){
    this.seconds = seconds
}

Timer.prototype.getSeconds = function(){
    return this.seconds
}

Timer.prototype.start = function() {
    this.interval = setInterval(() => {
        this.seconds -= 1
        console.log(this.seconds)
        if(this.isTimerFinished()){ this.stop() }
    }, 1000)
}

Timer.prototype.stop = function() {
    clearInterval(this.interval)
}

Timer.prototype.isTimerFinished = function() {
    return this.seconds <= 0;
}
