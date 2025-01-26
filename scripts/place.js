const chill=document.querySelector("#windchill")

function windchill(speed, temp){
    let windchill=Math.round((35.74+(0.6215*temp)-(35.75*speed^0.16)+(0.4275*temp*speed^0.16))*10)/10;
    return windchill;
}

chill.innerHTML=`Wind Chill ${windchill(6,41)}°F` 