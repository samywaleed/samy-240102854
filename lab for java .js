
// let arrStr = ["apple", "banana", "cherry", "date"];
// arrStr.sort();
// console.log(arrStr);

// let arr =[10,2,5];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element);
// });

// for(var element of  arr){
//     console.log(element);
// }

//      let obj1 = document.getElementById("id");
//      console.log(obj1);

//      let obj2 = document.getElementsByClassName("ckild");
//         console.log(obj2);
      
//      let obj3 = document.getElementsByTagName("h2");
//         console.log(obj3);

//      let obj4 = document.querySelector("#flex-contaner");

//      obj1.innerHTML= "dom test , <a href='#'>mypage</a>";

//     var obj5= document.getElementsByTagName (  "input");    

//     obj5.setAttribute ( "placeholder", "Email");      
//     obj5.setAttribute ( "value", "mygmail@gmail.com");      

//    // console.log(obj5);
//     obj4.computedStyleMap.width="60px";
//     obj1.style.background="gray";

//     var elemen1 = document.createElement("h1");
//     var text1 = document.createTextNode(" The end ");
//     elemen1.appendChild(text1);
//     document.body.appendChild(elemen1);


// obj6 = document.getElementById("id");
// obj6.addEventListener("click", function(){
//     alert("hello");
// } );

var person ={
    name :"sara" ,
    age:25,
    welcome : function(){
        console.log("welcome"+this.name)
    }
}



function Person(name,age){ this.name = name
    this.age = age
    this.welcome = function(){
    console.log("welcome"+this.name)  }  
    }



console.log(person.name)
person.age=30
console.log(person)
person.major="cs"
console.log(person)



delete person.age
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))


var p1 ={}
Object.assign(p1 , person , {job:"eng"})
console.log(p1)
// this.name = name
// this.age = age
// this.welcome = function(){
//     console.log("welcome"+this.name)
          
var p2 = new Person("ali" , 28)
console.log(p2)
p2.welcome()
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = arr1.concat(arr2)
console.log(arr3)


console.log(JSON.stringify(person))

let str =JSON.stringify(person)
    console.log(str)
   
    console.log("task1")
    console.log("task2")
    console.log("task3")
    
    
    console.log("task1")
    setTimeout(function(){
        console.log ("task2")
    },3000)
console.log("task3")
