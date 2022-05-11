function showTime() {
  var display = document.getElementById("display");
  var date = new Date();
  var hora = date.getHours();
  var min = date.getMinutes();
  var seg = date.getSeconds();
  var time_past;

  hora = hora < 10 ? "0" + hora : (hora = hora);
  min = min < 10 ? "0" + min : (min = min);
  seg = seg < 10 ? "0" + seg : (seg = seg);
  time_past = hora > 11 ? (time_past = "PM") : (time_past = "AM");
  display.innerHTML = `${hora}: ${min}: ${seg} ${time_past}`;
  setTimeout(showTime, 1000);
}
showTime();
