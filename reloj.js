function startTime() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
   
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let curWeekDay = days[today.getDay()];
    let curDay = today.getDate();
    let curMonth = months[today.getMonth()];
    let curYear = today.getFullYear();
    let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    let message = getMessage(hr);
    document.getElementById("message").innerHTML = message;

    let time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let getMessage = (hr) => {
    console.log( "hora" + hr)
  if (hr >= 0 && hr <= 7) {
      return "Es hora de descansar. Apaga y sigue mañana";
  } else if (hr > 7 && hr <= 12) {
      return "Buenos días, desayuna fuerte y a darle al código";
  } else if (hr > 12 && hr <= 14) {
      return "Echa un rato más pero no olvides comer";
  } else if (hr > 14 && hr <= 16) {
      return "Espero que hayas comido";
  } else if (hr > 16 && hr <= 18) {
      return "Buenas tardes, el último empujón";
  } else if (hr > 18 && hr <= 22) {
      return "Esto ya son horas extras, piensa en parar pronto";
  } else {
      return "Buenas noches, es hora de pensar en parar y descansar";
  }
}