var Timer = () => {
    this.seconds = 0
    this.interval = null
}

Timer.prototype.setSeconds = (seconds) => {
    this.seconds = seconds
}

Timer.prototype.getSeconds = () => {
    return this.seconds
}

Timer.prototype.start = () => {
    var myself = this
    this.interval = setInterval(() => {
        myself.seconds -= 1
    }, 1000)
}

Timer.prototype.stop = () => {
    clearInterval(this.interval)
}

Timer.prototype.isTimerFinished = () => {
    return this.seconds <= 0;
}