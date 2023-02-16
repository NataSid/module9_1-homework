//JSON

const jsonString =`
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

let rezult = { 
 list: []
};

const data = JSON.parse(jsonString);
const list = data.list;
list.forEach(elem => {
 let list = {
   name: elem.name,
   age: Number(elem.age),
   prof: elem.prof,   
  }
rezult.list.push(list)
});

console.log(rezult)
