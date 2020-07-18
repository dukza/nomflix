const human = {
    name:"Nico",
    lastName:"Serrano",
    nationality:"Korea",
    favFood:{
        breakfast:'bread',
        lunch:'water',
        dinner:'agg'
    }
}

// const name = human.name;  
// const lastName = human.lastName;  

// 오브젝트의 property 가져오기
const {name,lastName,nationality:difName, favFood:{dinner}} = human;

// const dinner =  human.favFood.dinner;

console.log(name, lastName, difName ,dinner);