// const locations;
let locations = [];
let places = [];
const text = document.getElementById('text')

// let newElement = document.createElement('p');
let bre = document.createElement('br')
let textNode;
const form   = document.getElementById('form')

const requestOptions = {
    method: 'GET',
  };
  
  // fetch("https://raw.githubusercontent.com/ToniCifre/all-countries-and-cities-json/master/countries.json", requestOptions)
  fetch("./places.json", requestOptions)
    .then(response => response.json())
    .then(result => {
      for(const key in result) {
      if (Object.hasOwnProperty.call(result, key)) {
        places.push(key)
        places.push(result[key]);
        // console.log(key)
        // places.push(key)
        // result[key].forEach(element => {
        //   // console.log(element)
        //   places.push(element)
        // });
      }
    }})
    .catch(error => console.log('error', error));


text.addEventListener('keyup', (e) => {
  
  while (form.firstChild) {
    form.removeChild(form.lastChild);
  }

  if(String(text.value).length > 3){
  places.forEach((value, i) => {

    if(i % 2 === 0){
      // value = String(value).toLowerCase()
      if(value.toLowerCase().search(String(text.value).toLowerCase()) !== -1){
      
        // textNode = document.createTextNode(value);

        // form.appendChild(document.createElement('p')).appendChild(textNode);
        form.innerHTML += `<p class="pop">${value}</p>`
      }
    }
    else{
      value.forEach((element) => {
        // element = String(element).toLowerCase()
        if(element.toLowerCase().search(String(text.value).toLowerCase()) !== -1){

        //   textNode = document.createTextNode(element);
      
        // form.appendChild(document.createElement('p')).appendChild(textNode);
        form.innerHTML += `<p class="pop">${element}</p>`
        }
    })
    }
  })
  }
})


    console.log(places)