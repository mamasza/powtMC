const h1 =  document.querySelector ("h1");
console.log("hello world");
let x = 3;
console.log(x);

let y = 4;
console.log(y,x);

const perso = {
    name:"John",
    age:30,
}
console.log(perso)
const people = ["anna","mark","jon"]
console.log(people)

function say(name){
    console.log("hello"+" "+name)
}

say("Magda");
say("Piotrek");

function dodaj (a,b){

    return a +b;
}

console.log(dodaj(4,7));
const dom = document.querySelector('h1');
console.log(dom)
const dom2 =document.querySelector('.subtitle')
console.log(dom2)

dom.innerHTML =" witaj magda w świecie JAvy"
dom2.innerHTML =" strona testowa"
const newDOM = document.createElement("div")
console.log(newDOM)
newDOM.innerHTML = "test"
dom2.append(newDOM)
newDOM.onclick = function(){
    console.log('kliknięto')
}
const v = 2;
const b = 6;
if (v >b){
    console.log ("v większe od b")
}else {
    console.log ("v nie większe od b")
}