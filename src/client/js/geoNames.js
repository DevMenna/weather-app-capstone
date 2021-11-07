import { postData } from "./postData";

async function handleSubmit() {
  const objectData = {};

  let formText = document.getElementById("name").value;
  console.log("::: Form Submitted :::");
  try {
    const returnedData = await postData("http://localhost:8080/geo", {
      cityName: formText,
    });

    const cityData = {
      lat: returnedData.geonames[0].lat,
      lng: returnedData.geonames[0].lng,
    };

    const weatherData = await postData(
      "http://localhost:8080/weather",
      cityData
    );

    objectData.weatherData = weatherData;
    try {
      const picData = { state: weatherData.data[0].weather.description };

      const pic = await postData("http://localhost:8080/pix", picData);
      const wePic = pic.hits[0].largeImageURL;
      objectData.wePic = wePic;
    } catch (error) {
      console.log("error", error);
    }
    return objectData;
  } catch (error) {
    console.log("error", error);
  }
}

export { handleSubmit };
