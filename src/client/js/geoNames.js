import { postData } from "./postData";
/*const baseURL = "http://api.geonames.org/search?";
const userName = "devMenna";

const geoNames = async () => {
  const cityName = document.getElementById("cityName").value;

  try {
    const coOrdinates = await fetch(
      baseURL + "name=" + cityName + "&type=json" + userName
    );
    const location = await coOrdinates.json();

    const locationData = {
      lng: location.lng,
      latitude: location.lat,
      country: location.countryName,
    };
    await postData("http://localhost:3030/add", locationData);
  } catch (error) {
    console.log("error", error);
  }
};*/
//export { geoNames };

async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  try {
    const returnedData = await postData("http://localhost:8080/geo", {
      cityName: formText,
    });
    console.log(returnedData.geonames[0].lat);
    console.log("::: Form Submitted :::");
  } catch (error) {
    console.log("error", error);
  }
}

export { handleSubmit };
