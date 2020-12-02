const time = document.querySelector('#clock');

currentTime = (i) =>
{
  if (i < 10) {
    i = "0" + i
  }

  return i;
}

clock = () =>
{
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  m = currentTime(m);
  h = currentTime(h);
  s = currentTime(s);

  time.innerHTML = h + ":" + m + ":" + s;
}

setInterval(clock, 1000)
