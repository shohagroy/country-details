
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => allCountrys(data));


const mainContainer = document.getElementById('card-container');
const allCountrys = (countryData) =>{

    for(const country of countryData){
        const cardDiv = document.createElement('div');

        cardDiv.classList.add('card-div')
        cardDiv.innerHTML = `
            <div class="card col-12 m-3 card-container">
                <img class="flag-image" src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text">${country.name.official}</p>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Capital: <span class="text-primary">${country.capital}</span></li>
                        <li class="list-group-item">Currencies: ${country.population}</li>
                        <li class="list-group-item">Lang Area: ${country.area} KM</li>
                    </ul>
                <div class="card-body">
                    <a href="https://en.wikipedia.org/wiki/${country.name.common}" class="card-link">See All Detailes</a>
                    <a href="${country.maps.googleMaps}" class="card-link">See Maps</a>
                </div>
            </div>
            `
            mainContainer.appendChild(cardDiv);
    }
}



document.getElementById('searh-button').addEventListener('click', () =>{

    const searhfild = document.getElementById('search-fild'); 
    const searhCountry = searhfild.value;
    const url = `https://restcountries.com/v3.1/name/${searhCountry}`;

    const cardDiv = document.querySelectorAll('.card-div');
    cardDiv.forEach(div => div.innerHTML = "");

    cardDiv.innerHTML = "";
    
    fetch(url)
    .then(res => res.json())
    .then(data => allCountrys(data));
    
    searhfild.value = '';
    cardDiv.innerHTML = "Not For Match";
})

document.getElementById('home-btn').addEventListener('click', () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => allCountrys(data));
})