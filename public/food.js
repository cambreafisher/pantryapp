//this file connects to the endpoint from the client 
//side to get the information
function getPantryList() {
    const url = "/pantry";
    
   
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        updateResultList(data);
    });
    
}

function updateResultList(data) {
    //hiding the main page
    let hide = document.getElementById('mainPage');
    hide.style.display = "none";
   
    const listElement = document.getElementById('pantryresults');
    data.food.forEach(element => {
        listElement.appendChild(renderfood(element));
        `<h1>${element.food_name}</h1>`;
    });
    console.log('updateResltList');
    console.log(data);
}

function renderfood(element) {
    const item = document.createElement('li');
    item.innerHTML = `<p>${element.food_name}</p>`;
    return item;
}