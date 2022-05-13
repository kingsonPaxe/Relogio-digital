function showTime() {
  var display = document.getElementById("display");
  var date = new Date();
  var hora = date.getHours();
  var min = date.getMinutes();
  var seg = date.getSeconds();

  hora = hora < 10 ? "0" + hora : (hora = hora);
  min = min < 10 ? "0" + min : (min = min);
  seg = seg < 10 ? "0" + seg : (seg = seg);
  display.innerHTML = `${hora} : ${min} : ${seg}`;
  setTimeout(showTime, 1000);
}
showTime();
