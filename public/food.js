//this file connects to the endpoint from the client 
//side to get the information
function getPantryList() {
    const url = "/pantry";
    
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        updatePantryList(data);
    });  
}

function updatePantryList(data) {
    //hiding the main page
    let hide = document.getElementById('mainPage');
    hide.style.display = "none";
   
    const listElement = document.getElementById('pantryresults');
    data.forEach(element => {
        listElement.appendChild(renderPantry(element));
        //`<h1>${element.food_name}</h1>`;
    });
    console.log('updatePantryList');
    console.log(data);
}

function renderPantry(element) {
    const item = document.createElement('li');
    item.innerHTML = `<p>${element.food_name}</p>`;
    return item;
}

/***************** */
function getExpiringFood() {
    const url = "/expiringFood";

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        updateExpiredList(data);
    });


    console.log()
}
function updateExpiredList(data) {
const listElement = document.getElementById('expiredresults');
console.log('before for each');
    data.forEach(element => {
        listElement.appendChild(renderExpired(element));
        //`<h1>${element.food_name}</h1>`;
    });
    
    console.log('updateResltList');
    console.log(data);
}

function renderExpired(element) {
    const item = document.createElement('li');
    var date = new Date(element.expiration_date);
    var dateString = date.toDateString();
    console.log('about to add it to innerHTML');
    item.innerHTML = `<p>${element.food_name}  -  ${dateString}</p>`;
    return item;
}