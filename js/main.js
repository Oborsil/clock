const getCurrentTime = () => {
  const currentDate = new Date();

  const hours = padNumbers(currentDate.getHours());
  const minutes = padNumbers(currentDate.getMinutes());
  const seconds = padNumbers(currentDate.getSeconds());
  return `${[hours, minutes, seconds].join(':')}`;
};

const padNumbers = (num) => {
  return num <10 ? `0${num}` : `${num}`; 
};

setInterval( () => {
  const time = getCurrentTime();
  const clock = document.querySelector('#clock');
  clock.textContent = time;
}, 1000);