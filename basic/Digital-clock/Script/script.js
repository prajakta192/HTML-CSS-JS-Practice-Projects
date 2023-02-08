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
    const Mseconds = document.querySelector('.Mseconds');
    const ampm = document.querySelector('.ampm');
    
 
    const date = new Date();
    const h = date.getHours();
        const m = date.getMinutes();
        const s = date.getSeconds();
        const ms = date.getMilliseconds();

    //console.log(hrFormat)
    if(hrFormat === '12Hr'){
        hours.textContent = h < 12 ? `0${h}` : `0${h -12}`;
        minutes.textContent = m < 10 ? `0${m}` : m;
        seconds.textContent = s < 10 ? `0${s}` : s;
        //Mseconds.textContent = ms < 10 ? `00${ms}` : ms
        
        ampm.textContent = h >= 12 ? 'PM' : 'AM';
     
    }else{
        hours.textContent = h < 12 ? `0${h}` : h;
        minutes.textContent = m < 10 ? `0${m}` : m;
        seconds.textContent = s < 10 ? `0${s}` : s;
        //Mseconds.textContent = ms < 10 ? `00${ms}` : ms
        ampm.textContent = h >= 12 ? 'PM' : 'AM';
        
    }
   
}

setInterval(() => {
    updateClock()
},1000) 
   
updateClock()
   