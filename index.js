// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.





// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string into an array of strings.
const flavors = userInputString.split(",");
console.log(flavors)

// init
const froyo = {
    Vanilla: 0,
    Strawberry: 0,
    Coffee: 0,
}


// create a conditional where IF vanilla, it adds +1 to vanilla: 0, etc"
// for each item in stringArray check flavor and add to correct key in object froyo


// with a for loop

// function froyoTest() {
//     for (i = 0; i < flavors.length; i++) {
//         if (flavors[i] === "vanilla") {
//             froyo.Vanilla++;
//         }
//         else if (flavors[i] === "strawberry") {
//             froyo.Strawberry++;
//         }
//         else if (flavors[i] === "coffee") {
//             froyo.Coffee++;
//         }
//     }
//     return froyo;
// }
// console.log(froyoTest(flavors));
// console.table(froyo);




// with for-in loop

function froyoOrder() {
    for (const key in flavors) {
        if (flavors[key] === "vanilla") {
            froyo.Vanilla++;
        } else if (flavors[key] === "strawberry") {
            froyo.Strawberry++;
        }
        else if (flavors[key] === "coffee") {
            froyo.Coffee++;
        }
        else
            return froyo;
    }
}
console.log(froyoOrder(flavors));
console.table(froyo);
