const intoSeconds = () => {
  const flightDate = document.getElementById("countDate").value;
  const count = new Date(flightDate);
  const seconds = count.getTime() / 1000;

  return seconds;
};


const getDay = (event) => {
  event.preventDefault()
  const func = setInterval(() => {
   
    const futureDate = intoSeconds() 
    const currentDate = counter()
    const timeLeft = futureDate - currentDate
    const fullTime = (new Date(timeLeft * 1000).toISOString().substr(8, 11)).split("T")
    const days = fullTime[0]
    const dayTime = fullTime[1].split(":")
    console.log(days ,"___>" , dayTime)
  }, 1000);
};

const counter = () => {
  const count = new Date();
  const seconds = count.getTime() / 1000;
  return seconds;
};

export { getDay };
