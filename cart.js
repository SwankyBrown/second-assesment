///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


//CODE HERE


const sumPriceFood = cart.reduce((acc,curr) =>{
    return acc + curr.price
},0)

console.log(sumPriceFood);



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal,tax,couponValue){
    const taxAmount = cartTotal * tax;
    const totalWithTax = cartTotal + taxAmount;
    const finalPrice = totalWithTax - couponValue;
    return finalPrice;
}

console.log(calcFinalPrice(26.97,.06,0));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    My customers height and size will be put into account to be able to seat them comfortabley this data type will be called height so i know what tables can sit a person over 6 foot as well as people shorter. next my customers will be asked their age to see of they qualify for the Daily Age Eat Free! i will call this data type age so i can log if they are elidgable for the free meal. i also want my customers to choose spicy or not-spicy. ill use this data type to see if their apitizers are gonna be (true) spicy or (false)not spicy. las thing is if its their birthday. i will use this data type to see if they qualify for a free peice of cake

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    age: 50,
    height: "5'7",
    spicy: true,
    birthday: false,
  };
