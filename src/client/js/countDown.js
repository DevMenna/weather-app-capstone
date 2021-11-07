const intoSeconds = () => {
  const requiredDate = document.getElementById("countDate").value;
  const count = new Date(requiredDate);
  const seconds = count.getTime() / 1000;

  return seconds;
};

const getDay = () => {
  event.preventDefault();
  const func = setInterval(() => {
    const futureDate = intoSeconds();
    const currentDate = counter();
    const timeLeft = futureDate - currentDate;
    const fullTime = new Date(timeLeft * 1000)
      .toISOString()
      .substr(8, 11)
      .split("T");
    const days = fullTime[0];
    const dayTime = fullTime[1].split(":");
    console.log(days, "___>", dayTime);
    document.getElementById("DD").textContent = days;
    document.getElementById("HH").textContent = dayTime[0];
    document.getElementById("MM").textContent = dayTime[1];
    document.getElementById("SS").textContent = dayTime[2];
  }, 1000);
};

const counter = () => {
  const count = new Date();
  const seconds = count.getTime() / 1000;
  return seconds;
};

export { getDay };
