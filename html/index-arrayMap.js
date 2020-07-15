const days = ['Mon', 'Tues', 'Wed','Thurs', 'Fri', 'Sat']

// const Days = days.map(day => console.log(day));

const newDay = (day,index) => `#${index+1} ${day}`;
// const Days = days.map(day => `📿${day}`);
// const Days = days.map(day => newDay);
const Days = days.map(newDay);

console.log(Days);