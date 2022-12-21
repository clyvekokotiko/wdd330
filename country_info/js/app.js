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
            <p class = "center"><b>Capital</b>: ${data[0].capital.toString().split(",").join(", ")}</p>
            <p class = "center"><b>Population</b>: ${data[0].population.toLocaleString()}</p>
            <p class = "center"><b>Currency</b>: ${data[0].currencies[Object.keys(data[0].currencies)].name}, ${data[0].currencies[Object.keys(data[0].currencies)].symbol}, ${Object.keys(data[0].currencies)[0]}</p>
            <p class = "center"><b>Region</b>: ${data[0].region}</p>
            <p class = "center"><b>Common Languages</b>: ${Object.values(data[0].languages).toString().split(",").join(", ")}</p>`;
        }).catch(() => {
            if(countryName.length == 0){
                result.innerHTML = `<p class = "center vailidity">Field can't be empty</p>`;
            }
            else{
                result.innerHTML = `<p class  = "center vailidity">Please enter a valid Country</p>`;  
            };
        });
    };
});