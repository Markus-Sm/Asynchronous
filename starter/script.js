'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

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
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`Country not found (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);

//       if (!('borders' in data[0])) throw new Error('No neighbour found');

//       const neighbour = data[0].borders[0];

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong 🥸😭💩 ${err.message}. Try again!`);
//     });
// };

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

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       err => reject(new Error(`Please allow your location. ${err}`))
//     );
  
//   });
// };
//getPosition().then((pos) => console.log(pos)).catch((err) => console.error(err));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       //destructure 'coord' object to get the required values
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `This API allows you to make only 3 requests per second. ${response.status}. Please wait and try again`
//         );
//       return response.json();
//     })
//     .then(data => {
//       console.log(
//         `You are in ${data.principalSubdivision}, ${data.countryName}.`
//       );
//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Country not found (${response.status}). Please, try again`
//         );
//       return response.json();
//     })
//     .then(([data]) => renderCountry(data))
//     .catch(err => alert(`Something went wrong. ${err}`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener('click', whereAmI);

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀

5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
*/

// let currentImage;

// const createImage = function (imgPath) {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.src = imgPath;

//         img.addEventListener('load', () => {
//             document.querySelector('.images').appendChild(img);
//             resolve(img);
//         });

//         img.addEventListener('error', () => {
//             reject(new Error(`Failed to load image from ${imgPath}`));
//         })
//     });
//   };

// const wait = function (seconds){
//   return new Promise(function (resolve){
//       setTimeout(resolve, seconds * 1000);
//   });
// };

// createImage('./img/img-1.jpg')
// .then(img => {
//   console.log('First image loaded:', img);
//   currentImage = img;
//   return wait(2);
// })
// .then(() => {
//   console.log('2 seconds have passed');
//   currentImage.style.display = 'none';
//   return createImage('./img/img-2.jpg');
// })
// .then(() => {
//   console.log("Second image loaded:", img);
//   return wait(2);
// })
// .then(() => {
//   console.log('2 more seconds have passed');
// })
// .catch(err => console.error('Failed to load image:', err));

// const imgContainer = document.querySelector('.images');

// const wait = function(seconds){
//   return new Promise(function(resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function(imgPath){
//   return new Promise(function(resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function() {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', () => {
//       reject(newError(`Failed to load img from ${imgPath}`));
//     });
//   });
// };

// let currentImg;

// createImage('./img/img-1.jpg')
// .then(img => {
//   currentImg = img;
//   console.log('Image 1 loaded');
//   return wait(3)
// })
// .then(() => {
//   currentImg.style.display = 'none';
//   return createImage('./img/img-2.jpg');
// })
// .then(img => {
//   currentImg = img;
//   console.log("Image 2 loaded");
//   return wait(3);
// })
// .then(() => {
//   currentImg.style.display = "none";
//   return createImage('./img/img-3.jpg');
// })
// .then((img) => {
//   currentImg = img;
//   console.log("Image 3 loaded");
//   return wait(3);
// })
// .then(() => {
//   currentImg.style.display = "none";
// })
// .catch(err => console.error(err));

/////////////////////////////////////////////////////////////////////

const getPosition = function(){
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function(){
  try{
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);
  if(!resGeo.ok) throw new Error('Helooo I am Error Errrror xd. Problem getting location data');

  // Country data
  const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
  if(!res.ok) throw new Error('Problem getting country');

  const data = await res.json();
  console.log(data);
  renderCountry(data[0]);
  } catch(err){
    console.error(`${err} 👎`);
    renderError(`Something went wrong ${err.meseage}`)
  }
};
whereAmI();

console.log("First");

try{
  let y = 1;
  const x = 2;
  y = 3;
} catch (err){
  console.error("Error");
}
