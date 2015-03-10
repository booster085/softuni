function setCurrentTime() {
    var time, hour, minutes, seconds;
    time = new Date();
    hour = time.getHours();
    if(hour < 10) {
        hour = '0' + hour;
    }
    minutes = time.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    seconds = time.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('clock').innerHTML = hour + ':' + minutes + ':' + seconds;
}
setInterval(function(){setCurrentTime()}, 1000);
