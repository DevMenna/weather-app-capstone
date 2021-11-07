import { handleSubmit } from "./geoNames";

async function handleForm(event) {
  event.preventDefault();

  const weatherData = await handleSubmit();
  const flightDate = document.getElementById("countDate").value;

  for (let i = 0; i < 17; i++) {
    if (weatherData.weatherData.data[i].datetime == flightDate) {
      console.log("flight date is ", weatherData.weatherData.data[i].datetime);

      document.getElementById("state").src = weatherData.wePic;

      const weData = document.getElementById("weatherState");
      weData.textContent =
        "Predicted weather data is : " +
        " High temp : " +
        weatherData.weatherData.data[i].high_temp +
        "C" +
        " Low temp : " +
        weatherData.weatherData.data[i].low_temp +
        "C";
      document.getElementById("weather").scrollIntoView({ behavior: "smooth" });
    }
  }
}

export { handleForm };
