const timer = (deadline) => {//oneModule
    let timer1;
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timereconds = document.getElementById('timer-seconds');

    const getTimeRimaining = () => {

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow)/1000;

        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds }
    }

    let updateClock = () => {
        let getTime = getTimeRimaining();

        /*timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timereconds.textContent = getTime.seconds;*/

        if (getTime.timeRemaining > 0) {
            //setTimeout(updateClock, 1000);
            timerHours.textContent = (getTime.hours < 10 ? "0" : "") + getTime.hours;
            timerMinutes.textContent = (getTime.minutes < 10 ? "0" : "") + getTime.minutes;
            timereconds.textContent = (getTime.seconds < 10 ? "0" : "") + getTime.seconds;
        } else {
            clearInterval(timer1);//window.clearInterval(timer1);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timereconds.textContent = '00';
        }
    }
    //updateClock();
    timer1 = setInterval(updateClock, 1000);

}

module.exports = timer;//oneModule