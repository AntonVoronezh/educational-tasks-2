const arr = ['Яблоко', 'Апельсин', 'Груша', 'Лимон'];

const rand = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

const getRandElemFromArr = arr[rand(0, 3)];

console.log(getRandElemFromArr);
