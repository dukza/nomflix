const days = ['Mon', 'Tues', 'Wed' ]
const otherDays = [ 'Thurs', 'Fri', 'Sat']

const allDays = [...days, ...otherDays, "sun"];

console.log(allDays)

const ob = {
    first : "hi",
    second:"hello"
}


const ab = {
     third:"bye bye"
}

const two ={...ob, ...ab}


console.log(two)