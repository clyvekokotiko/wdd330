let country = document.getElementById("country_text");
let result = document.getElementById("result");

country.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        let countryName = country.value;
        let countryUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        console.log(countryUrl)
        fetch(countryUrl).then((response) => response.json()).then((data) => {
            console.log(data)
            result.innerHTML = `<img src = "${data[0].flags.svg}" class = "flags">
            <h2 class = "center">${data[0].name.common}</h2>
            <p class = "center">Capital: ${data[0].capital[0]}</p>
            <p class = "center">Population: ${data[0].population}</p>
            <p class = "center">Region: ${data[0].region}</p>
            <p class = "center">Common Languages: ${Object.values(data[0].languages).toString().split(",").join(", ")}</p>`;
        }).catch(() => {
            if(countryName.length == 0){
                result.innerHTML = `<p class = "center vailidity">Please enter a valid Country</p>`;
            }
            else{
                result.innerHTML = `<p class  = "center vailidity">Please enter a valid Country</p>`;  
            };
        });
    };
});