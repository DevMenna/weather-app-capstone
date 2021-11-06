import { postData } from "./postData";


async function handleSubmit(event) {
  event.preventDefault();

  
  let formText = document.getElementById("name").value;
  console.log("::: Form Submitted :::");
  try {
    const returnedData = await postData("http://localhost:8080/geo", {
      cityName: formText,
    });
    
    const cityData = { lat:returnedData.geonames[0].lat , lng:returnedData.geonames[0].lng }
    console.log(cityData);

    const weatherData = await postData("http://localhost:8080/weather", cityData);
    console.log(weatherData)

    const picData = {state: weatherData.data[0].weather.description}
    console.log(picData)
   
    const pic = await postData("http://localhost:8080/pix", picData);
    const wePic = pic.hits[0].largeImageURL

     const result = document.createElement("div")
    result.classList.add("weather")
    const newFig = document.createElement("figure")
    const newPic = document.createElement("img")
    newPic.setAttribute("src" , wePic)
    newFig.append(newPic)
    const newFigCaption = document.createElement("figcaption") 
    newFigCaption.textContent="The expected weather "+ weatherData.data[0]
    newFig.append(newFigCaption)
    result.append(newFig)
    document.getElementsByClassName("content").appendChild(result);  


  } catch (error) {
    console.log("error", error);
  }


}

export { handleSubmit };
