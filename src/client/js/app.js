/* Global Variables */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&appid=392991b9a329ba78de92bc7ffe42e778";
const units = "&units=imperial";
// Create a new date instance dynamically with JS

const getData = async (url = "") => {
  const response = await fetch(url);

  try {
    const receivedData = await response.json();
    console.log(receivedData);
    return receivedData;
  } catch (error) {
    console.log("error", error);
  }
};

const postData = async (url = "", data = {}) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    const response = await res.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};

const updateUi = async () => {
  try {
    const projectData = await getData("http://localhost:3030/get");
    date.innerHTML = "Temp's date is  : " + projectData.date;
    temp.innerHTML = "Temp's value is : " + projectData.temp + " F";
    const content = document.getElementById("content");
    content.innerHTML = "Your feelings today are  : " + projectData.feelings;
  } catch (error) {
    console.log("error", error);
  }
};

//function to determine the date

const daysDate = () => {
  const d = new Date();
  const newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
  return newDate;
};

const run = async () => {
  const zCode = document.getElementById("zip").value;

  try {
    const weather = await fetch(baseURL + zCode + units + apiKey);
    const weatherData = await weather.json();

    const feeling = document.getElementById("feelings").value;
    const weData = {
      date: daysDate(),
      temp: weatherData.main.temp,
      feelings: feeling,
    };
    await postData("http://localhost:3030/add", weData);

    await updateUi();
  } catch (error) {
    console.log("error", error);
  }
};

document.getElementById("generate").addEventListener("click", run);
