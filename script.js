setInterval(setClock,1000);
const fetchHour = document.querySelector('[data-hour]');
const fetchMin = document.querySelector('[data-min]');
const fetchSec = document.querySelector('[data-sec]');
function setClock(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    setTime(fetchHour,hour);
    setTime(fetchMin,min);
    setTime(fetchSec,sec);
}
function setTime(element,value){
    console.log()
    if(element===document.querySelector('[data-sec]')){
        if(value>=10){
            element.innerText = value;
        }
        else{
            element.innerText = '0'+value;
        }
    }
    else{
        if(value>=10){
            element.innerText = value+':';
        }
        else{
            element.innerText = '0'+value+':';
        }
    }
}
setClock();


