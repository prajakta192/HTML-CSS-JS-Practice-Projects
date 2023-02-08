if(document.readyState === 'loading'){

    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}




function ready(){
   // console.log('ready')
  
   //setting hours, minutes, seconds 
   const hours = document.querySelector('.hours');
   const minutes = document.querySelector('.minutes');
   const seconds = document.querySelector('.seconds');
   const Mseconds = document.querySelector('.Mseconds');
   const ampm = document.querySelector('.ampm')

   const date = new Date();
   const h = date.getHours();
   const m = date.getMinutes();
   const s = date.getSeconds();
   const ms = date.getMilliseconds();
   hours.textContent = h < 12 ? `0${h}` : `0${h -12}`;
   minutes.textContent = m < 10 ? `0${m}` : m;
   seconds.textContent = s < 10 ? `0${s}` : s;
   //Mseconds.textContent = ms < 10 ? `00${ms}` : ms
   
   ampm.textContent = h >= 12 ? 'PM' : 'AM';


}

setInterval(() => {
   ready()
},1000) 
   
   
   