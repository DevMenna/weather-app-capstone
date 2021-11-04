const intoSeconds = () => {
  const flightDate = document.getElementById("countDate").value;
  const count = new Date(flightDate);
  const seconds = count.getTime() / 1000;
  console.log(seconds);
  return seconds;
};

/* const getDay = () => {
  const countDate = new Date(document.getElementById("countDate").value);
  var counter = setInterval(function () {
    const countDownDate = countDate.getTime;
  }, 1000);
  let now = new Date().getTime();
  let timeleft = countDownDate - now;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));


}; */

const getDay = () => {
  const func = setInterval(() => {
    const currentSecs = intoSeconds();
    let now = new Date().getTime() / 1000;
    let timeLeft = currentSecs - now;
    //to get the actual
    const dateLeft = counter(timeLeft);
    console.log(dateLeft);
  }, 1000);
};

const counter = (timeLeft) => {
  var date = new Date(null);
  date.setSeconds(timeLeft);
  return date;
};

export { getDay };
