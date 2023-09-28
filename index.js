
// Using JavaScript objects, 
//create an object labeled customer 
//add the following key:value pairs:


const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    firstVisit: false,
    toppings: ["chocolate sprinkles", "wafer straws", "gummy bears"],
    futureFlavors: "mango",
    todaysPurchaseCost: 5.32,
    someArrKey: [firstName, lastName, email, phone, favoriteFlavors, cupSize, firstVisit, toppings, futureFlavors, todaysPurchaseCost],
};

//Modify Customer Info

customer['email'] = "Jak3Smith1992@email.com";
customer['phone'] = 3195551234;
customer['zipCode'] = "63132";
customer['favoriteFlavors'] = ["coffee", "strawberry", "matcha"];

// Delete Customer Info
delete customer.zipCode;
delete customer.favoriteStore;


console.log(someArrKey);


