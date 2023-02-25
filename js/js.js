const URL = `https://restcountries.com/v3.1/all`;

fetch(URL)
.then(res => res.json())
.then (data => {
    console.log(data);
    getCountries(data);

})
const card = document.getElementById('container');
const getCountries = (data) => {
    data.forEach(country => {
        console.log(country.name.common);
        const div = document.createElement('div');
      
        div.innerHTML = `
        <div class="card w-full bg-base-100 shadow-xl">

            <figure class="px-10 pt-10">
                <img src="${country.flags.png}" alt="Country" class="rounded-xl" />
            </figure>

            <div class="card-body items-center text-center">
                <h2 class="card-title">${country.name.common}</h2>
                <p></p>

                <div class="card-actions">
                    <button onClick="loadMoal('${country.cca2}');" class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
        `;
        card.appendChild(div);
        
    })
}

const loadMoal = (id) => {
    const URL = `https://restcountries.com/v3.1/alpha/${id}`;

}