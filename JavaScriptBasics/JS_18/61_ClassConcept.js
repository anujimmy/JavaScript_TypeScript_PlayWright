class Person{
      //name
      //age
      //const... will be called
      constructor(name,age){
            this.name = name;
            this.age = age;
      }
      /**
       * 
       * @param {number} speed 
       */
      drive(speed){ // no function keyword is required - this is a method
            console.log(`this ${this.name} is driving at ${speed}km/hr`);
      }

      getAddress(){
            return 'Zurich Switzerland';
      }

      walking = function(){
            console.log(`{this.name} is walking`);
      }

      getInfo = () =>{
            console.log(`some infor :{this.name} is [this.age] old now... `);
      }
}

let p1 = new Person ('Joseph',30);
console.log('name : ' + p1.name);
console.log('age : ' + p1.age);
console.log(p1);
p1.drive(120);
let address = p1.getAddress();
console.log('address : '+ address);
p1.walking();

let p2 = new Person();
console.log(p2.name);
console.log(p2.age);
console.log(p2);

new Person('Mary',50); //gc will be taking this variable.


class Human{
      constructor(age,name,gender){
            this.name = name;
            this.gender = gender;
            this.age = age;
      }
      /**
       * @param {string} address
       */
      print_address(){
            console.log(`the ${this.name} lives at ${address}`);
      }
};

let human1 = new Human(37,'harry potter','M');
console.log(human1.age);
console.log(human1.name);
console.log(human1.gender);

