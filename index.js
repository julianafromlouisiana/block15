
// Using JavaScript objects, 
//create an object labeled customer 
//add the following key:value pairs:

const customer = {
    firstName: "Jake",
    lastName: "Smith",
    email: "jakeSmith@aol.com",
    phone: "undefined",
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Targe",
    firstVisit: false
};
//Modify the following properties in the customer object using bracket notation: 

customer['email'] = "Jak3Smith1992@email.com";
customer['phone'] = 3195551234;
customer['zipCode'] = "63132";
customer['favoriteFlavors'] = ["coffee", "stawberry", "matcha"];
//Delete the following properties in the customer object using the delete keyword.
delete customer['zipCode'];
delete customer['favoriteStore'];
//Add the following key:values to the customer object using dot notation:
//futureFlavors: "mango" and todaysPurchaseCost: 5.32
customer.toppings = ["chocolate sprinkles", "water straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todayPurchaseCost = 5.32;



console.log(customer);


//


