const toggleBtn = document.querySelector('.hrFormat');
toggleBtn.addEventListener('change', getHourFormat)

//changing Hour Format
function getHourFormat(){
    const btnVal = toggleBtn.value;
    return btnVal

}
//const hrFormat = getHourFormat()
//console.log(hrFormat)
 
function updateClock(){

    const hrFormat = getHourFormat();

    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
    const ampm = document.querySelector('.ampm');
    const dDate = document.querySelector('.date');
    const month = document.querySelector('.month');
    const year = document.querySelector('.year')
 
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const d = date.getDate();
    const mo = date.getMonth();
    const y = date.getFullYear()
    const actualMonth = mo + 1;

    //check hours > 12
    if(h > 12){
        h = h -12;
        ampm = 'Pm'
    }
    //console.log(hrFormat)
    if(hrFormat === '12Hr'){
        hours.textContent = h < 10 ? `0${h}` :h;
        minutes.textContent = m < 10 ? `0${m}` : m;
        seconds.textContent = s < 10 ? `0${s}` : s;
        dDate.textContent = d < 10 ? `0${d}` : d;
        month.textContent = actualMonth < 10 ? `0${actualMonth}` : actualMonth;
        year.textContent = y;
    }else{
        hours.textContent = h < 12 ? `0${h}` : h;
        minutes.textContent = m < 10 ? `0${m}` : m;
        seconds.textContent = s < 10 ? `0${s}` : s;
        //Mseconds.textContent = ms < 10 ? `00${ms}` : ms
        ampm.textContent = h >= 12 ? 'PM' : 'AM';
        dDate.textContent = d < 10 ? `0${d}` : d;
        month.textContent = actualMonth < 10 ? `0${actualMonth}` : actualMonth;
        year.textContent = y;
    }
   //analog clock
    let secondsHand = document.querySelector('.seconds_hand')
 let minutesHand = document.querySelector('.minutes_hand')
 let hoursHand = document.querySelector('.hours_hand')
    const rotatePerSec = (360/60);
 // 1min = 60sec for 60sec sechand rotate  in 360deg so for 1sec it rotate 6deg 360/60
 secondsHand.style.transform = `rotate(${s * rotatePerSec}deg)`;
    minutesHand.style.transform =`rotate(${m * rotatePerSec + s/10}deg)`;
    hoursHand.style.transform = `rotate(${h * 30 + m/2}deg)`
console.log(`rotate(${s * rotatePerSec}deg)`)
 
}

setInterval(() => {
    updateClock()
},1000) 
   
updateClock()
   