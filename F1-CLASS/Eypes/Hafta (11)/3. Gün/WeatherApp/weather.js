const form = document.querySelector("form");
const input = document.querySelector("form input");
const msgSpan = document.querySelector(".msg");
const list = document.querySelector(".container .cities");

localStorage.setItem(
  "apikey",
  EncryptStringAES("8f476966e75f896c4c73cf65cc1e398b")
);

form.addEventListener("submit", (e) => {
  e.preventDefault();  //?  sayfanın yeniden yüklenmesini engelliyoruz. yaptığımız işlemin silinmemesi için yani.
  // console.log("form")
  getWeatherDataFromApi();  //? api den veri çekme fonksiyonu
  form.reset(); //? butonun içine yazdığımız yazının işimiz bittikten sonra silinmesini sağlar. diğer seçenekler:
  //? input.value = "";
  //? target vs. currentTarget
  //? e.currentTarget.reset(); diğer resetleme seçenekleri
});

const getWeatherDataFromApi = async () => {
  // console.log("data")
  const apiKey = DecryptStringAES(localStorage.getItem("apikey"));
  console.log(apiKey);
  const cityName = input.value;
  console.log(cityName);
  const units = "metric";
  const lang = "tr";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;
  console.log(url);

  try {
    const response = await fetch(url).then((res) => res.json());
    console.log(response);

    const { main, name, sys, weather } = response;
    // console.log(name)
    // console.log(response.name)
    const iconUrl = `https://openweathermap.org/img/wn${weather[0].icon}/@2x.png`;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
    console.log(response);

    //? filter, map, reduce, forEach ==> array
    //? forEach => nodeList
    const cityNamesSpan = list.querySelectorAll("span");
    console.log(cityNamesSpan);

    const filteredArray = [...cityNamesSpan].filter(
      (span) => span.innerHTML == name
    );
    if (filteredArray.length > 0) {
      msgSpan.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
      setTimeout(() => {
        msgSpan.innerText = "";
      }, 3000);
      return;
    }
    // console.log(filteredArray)

    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = `
         <h2> 
         <span>${name}</span>
         <sup>${sys.country}</sup>
         </h2>
         <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
                <img class="city-icon" src="${iconUrlAWS}">
                <figcaption>${weather[0].description}</figcaption>
          </figure>
         `;

    list.prepend(createdLi);
  } catch (error) {
    msgSpan.innerText = "City not found";
    setTimeout(() => {
      msgSpan.innerText = "";
    }, 3000);
  }
};



 
