//this file connects to the endpoint from the client 
//side to get the information
/**************
 * getPantryList
 */
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
    let show = document.getElementById('pantryPage');
   show.style.display = "block";
   
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
    item.innerHTML = `<p name="foodname">${element.food_name}</p>
    
    <button class="remove" data-foodname="${element.food_name}" data-expires="${element.expiration_date}" onclick="removeFood(this)">Remove</button>`;
    
    return item;
}

/***************** 
 * getExpiringFood
*/
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

/**************
 * getShopping List 
 */
function getShopping() {
    const url = "/shopping";

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        updateShoppingList(data);
    });
    console.log()
}

function updateShoppingList(data) {
    //make sure the right elements are showing: main page is hidden, shopping is not
    let hide = document.getElementById('mainPage');
    hide.style.display = "none";
   let show = document.getElementById('shoppingPage');
   show.style.display = "block";

    const listElement = document.getElementById('shoppingresults');
    data.forEach(element => {
        listElement.appendChild(renderShopping(element));
        //`<h1>${element.food_name}</h1>`;
    });
    console.log('updateShoppingList');
    console.log(data);
}

function renderShopping(element) {
    const item = document.createElement('li');
    item.innerHTML = `<p>${element.food_name}  -  ${element.quantity}</p>`;
    return item;
}
/*************
 * Add Food
 */
function addFood() {

    // var foodname = $("#foodname").val();
    // var expires = $("#expires").val();
    //checkValidDate(expires);
    var foodname = "Yellow Cake Mix"
    var expires = "2020-09-24T00:00:00.000Z"

    var params = {
        foodname: foodname,
        expires: expires
    };

    $.post("/addFood", params, function(result) {
        if(result && result.success) {
            $("#status").text("Success");
        }else {
            $("#status").text("Fail");
        }
    });
}
function checkValidDate(expires) {

}

function removeFood(event) {
    
    // console.log(event.dataset.foodname);
    // console.log(event.dataset.expires);

    var params = {
        foodname: event.dataset.foodname, 
        expires: event.dataset.expires
    };

    console.log(params)

    $.post("/removeFood", params, function(result) {
        if(result && result.success) {
            $("#status").text("Success");
        } else {
            $("#status").text("Fail");
        }
    });
    console.log("before calling the getPantryList to rerender")
    getPantryList();
    console.log("rerendered the page");
}