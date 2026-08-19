console.log("<--- Template literal ` --->");

let msg = `hi this is my code
i am learning javascript typescript
hi this is me writing code in visual studio
i am so happy and nervous`;
console.log(msg);

let msg1 = `hi it's my code`;
console.log(msg1);

let msg2 = `hi it"s my code`;
console.log(msg2);

console.log("<--- Escape Sequences / --->");

let m = 'it\'s my code';
let n = "it's my code";
let o = "it\"s my code";

console.log(m);
console.log(n);
console.log(o);

console.log("<--- PlaceHolder ${} --->");
let emp_ID = "123";
let emp_Name = 'Tom';
let emp_Age = 35;

console.log("hey " + emp_Name + ", Age : " + emp_Age + " and ID : " + emp_ID);
console.log(`hey ${emp_Name}, Age : ${emp_Age} and ID : ${emp_ID}`);

let a = 100;
let b = 200;
console.log(`Print a,b -> ${a} , ${b}`);


let name = "HARRY POTTER";
let friends_name1 = "Ron Weasley";
let friends_name2 = "Hermione Granger";
let enemy_name = 'tom riddle marvolo';

let welcome_msg = `hi my name is ${name}. 
                  My friends are ${friends_name1} and ${friends_name2}. 
                  My only enemy is ${enemy_name}`;

console.log(welcome_msg);