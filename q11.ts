//assigment no 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.


let names:string[] = ["Faria","Fatima","zunaira","Mavia","Aysha","Husain"];
//loop method
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    
}
//for each
names.forEach(friend=> {
    console.log(friend);
    
});
//for of loop
for (const friendname of names) {
    console.log(friendname);
    
}
//assigment no 12

//loop method
for (let i = 0; i < names.length; i++) {
    console.log(`Hellow,${names[i]} How are you?`);
}
