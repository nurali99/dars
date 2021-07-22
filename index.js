"use strict";
const person={
  name:'nuralijon',
  age:24,
  first:"mamadaliyev",
  defo:{
    width:799,
    height:534,
    color:"red",
  },
};
console.log(person);

for(let key in person){
  if(typeof person[key]==="object"){
    for(let i in person[key]){
      console.log(`properti ${key} value ${person[key][i]}`);
    }
  }else{
    console.log(`properti ${key} value ${person[key]}`);
}
  
}