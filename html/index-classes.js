class Human{
     constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
     }
} 

const nico =  new Human("Nico","Seerrano")

console.log(nico);
console.log(nico.name);


class Baby extends Human{
    cry(){
        console.log('waaaaaa')
    }
    sayName(){
        console.log(`My name is ${this.name}`)
    }
}

const myBaby = new Baby('mini','me');
console.log(myBaby);
console.log(myBaby.cry(), myBaby.sayName());