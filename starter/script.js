'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryDataAndNeighbour = function(country){

//     //AJAX call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.responseText);

//         // Render country 1
//         renderCountry(data);

//         // Get neighbour country (2)
//         const [neighbour] = data.borders;

//         if (!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load', function () {
//             const data2 = JSON.parse(this.responseText);
//             console.log(data2);

//             renderCountry(data2, 'neighbour');
//         });
//     });
// };

// getCountryDataAndNeighbour('Germany')

////////////////////////////////////////////////////

// const getJSON = function (url, errorMsg = "Something went wrong"){
//     return fetch(url).then(response => {
//             if(!response.ok) throw new Error(`Country not found (${response.status})`);

//             return response.json();
//             })
// }

//     const getCountryData= function(country){
//         //Country 1
//         fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(response => {
//             console.log(response);

//             if(!response.ok)
//                 throw new Error(`${errorMsg} (${response.status})`)

//             return response.json()
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0]

//             if(!neighbour) return;

//             // Country 2
//             return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//         })
//         .then(response => response.json())
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             renderError(`Something went wrong 🥸😭💩 ${err.message}. Try again!`)
//         });

//     };

//     btn.addEventListener('click', function(){
//         getCountryData('fghgdhdg')
//     })

/////////////////////////////////////////////////////////////////////////////////////
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  //Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);

      if (!('borders' in data[0])) throw new Error('No neighbour found');

      const neighbour = data[0].borders[0];

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong 🥸😭💩 ${err.message}. Try again!`);
    });
};

// btn.addEventListener('click', function(){
//     getCountryData('Poland')
// })

//////////////////////////////////////////////////////////
/* 

6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.

*/

// const whereAmI = function (lat, lng){
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {

//         if(!res.ok) throw new Error(`bug  width geocoding ${res.status}`);

//         return res.json()
//     })
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);

//         return fetch(`https://restcountries.com/v2/name/${data.country}`)
//     })
//     .then(response => {
//         if (!response.ok) throw new Error(`Country not found`);

//         return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}  👎🏼`))
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);

//////////////////////////////////////////////////////////////////////////////////////////

// console.log('test start');
// setTimeout(() => console.log(`0 sec timer`), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve("Resolved promise 2").then(res => {
//     for (let i =0; i < 100; i++){
//         console.log(res);
//     }
// })
// console.log('Test end');

///////////////////////////////////////////////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {

//     console.log('Lotter draw is happening');

//     setTimeout(function(){
//     if(Math.random() >= 0.5){
//         resolve('You WIN V');
//     }else{
//         reject('You lost your money')
//     }
//     }, 2000)

// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // promisifying setTimeout
// const wait = function (seconds){
//     return new Promise(function (resolve){
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// wait(2)
// .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// })
// .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
// })
// .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// })
// .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
// })
// .then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(1);
// })

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

///////////////////////////////////////////////////////////////////////////////

// const getPosition = function(){
//     return new Promise(function(resolve, reject){
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// }

// // getPosition().then(pos => console.log(pos));

// const whereAmI = function (){

//     getPosition().then(pos => {
//         const {latitude: lat, longitude: lng} = pos.coords;

//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//     .then(res => {

//         if(!res.ok) throw new Error(`bug  width geocoding ${res.status}`);

//         return res.json()
//     })
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`);

//         return fetch(`https://restcountries.com/v2/name/${data.country}`)
//     })
//     .then(response => {
//         if (!response.ok) throw new Error(`Country not found`);

//         return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}  👎🏼`))
// };

// btn.addEventListener('click', whereAmI)

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(new Error(`Please allow your location. ${err}`))
    );
    //a shorter version of the code above
    //navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
//getPosition().then((pos) => console.log(pos)).catch((err) => console.error(err));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      //destructure 'coord' object to get the required values
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(
          `This API allows you to make only 3 requests per second. ${response.status}. Please wait and try again`
        );
      return response.json();
    })
    .then(data => {
      console.log(
        `You are in ${data.principalSubdivision}, ${data.countryName}.`
      );
      return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
    })
    .then(response => {
      if (!response.ok)
        throw new Error(
          `Country not found (${response.status}). Please, try again`
        );
      return response.json();
    })
    .then(([data]) => renderCountry(data))
    .catch(err => alert(`Something went wrong. ${err}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', whereAmI);