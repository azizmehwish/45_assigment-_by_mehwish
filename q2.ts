//assigment no 2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName:string ="Eric";
let message:string = `"Hellow Eric,would you like to learn some python today"`
console.log(personName, message);

//assigment no 3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let perName:string = ("mehwish aziz");


console.log(perName.toUpperCase());

console.log(perName.toLowerCase());
let sentance:string = "i am learning typescript"

let words:string[]= sentance.split(" ");
console.log(words);
let titleCaseName:string = "";

for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() +' '
}
    console.log(titleCaseName);

