"use strict";
//assigment no 19
let guestList = ["Misbah", "Mona", "Saima"];
let absentGuest = "Mona";
let newGuest = "Hira";
guestList[1] = newGuest;
console.log(guestList);
guestList.forEach(dinner => {
    console.log(`Dear ${dinner}:"you are invited to dinner"`);
});
//assigment no 16
console.log("Good news,we found a bigger dinner table so we invite  three more guest");
guestList.unshift("Faira");
guestList.splice(2, 0, "Fatima");
guestList.push("Aysha");
guestList.forEach(dinner => {
    console.log(`Dear ${dinner} :"you are invited to dinner"`);
});
//q no 17
console.log("sorry we can't arrange a bigger dinner table so only two guest are invited");
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(removeGuest, "sorry you  are not invited to dinner");
}
for (let i = 0; i < guestList.length; i++) {
    const still = guestList[i];
    console.log(`${still} you are still invited`);
}
guestList.splice(0, 2);
console.log(guestList);
console.log("the no of people invited", guestList.length);
//assigment no 20
let countrie = ["dubai", "london", "maree"];
console.log(countrie);
countrie.forEach(country => {
    console.log(country);
});
let person = {
    name: "jhon",
    age: 35,
    city: "london"
};
console.log(person);
