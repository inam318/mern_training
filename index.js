// // js variables

// var number1 =41;
// var number2 =41;

// // data types in js

// var num1=12;
// var num2=12.2;

// var str1="this is the a stings";
// var str2="this is the also stings";

// // js objects

// var marks={
//     key1: 12,
//     key2: 17,
//     key3: 14,
//     key4: 19,
//     key5: 122.22
// }
// console.log(marks);

// // boolean in js

// var a=true;
// var b= false;
// var und= undefined;
// console.log(a);

// // permitive data types in js: number strings  boolean etc

// // reference data types : arrays and objects

// var arr1=[1,2,4,5,7];
// console.log(arr1);

// // operators in js
// // aritmatic operators

// var a=10;
// var b= 3;


// console.log("The value of a+b is ", a+b);
// console.log("The value of a-b is ", a-b);
// console.log("The value of a*b is ", a*b);
// console.log("The value of a/b is ", a/b);

// // assigment operators in js

// var x= 22;
// var y= 12;

// console.log(x==y);
// console.log(x>=y);
// console.log(x>y);
// console.log(x<y);

// // logical operators in js

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false|| false)

// // functions in js

// function avg(a,b){
// return (a*b);
// }

// result1= avg(3,5);
// console.log(result1);

// function sum(a,b){
//     return (a+b);
//     }
    
// result= sum(3,5);

// console.log(result);

// // condition in js (if else)
// var age=30;
// if(age>26){
//     console.log("You are not a kid");

// } else if(age>32){
//     console.log("you are kid!");

// } else {
//     console.log("Some thing wrong!");
// }

// // for loop in js

// var arr=[1,2,3,4,5,6,7,7];
// for (i=0; i<arr.length; i++){
//     console.log(arr[i]);

// }

// arr.forEach(function(element){
// console.log(element);
// });

// let elem_class= document.getElementById('click');
// //console.log(elem_class);

// let elem2_class= document.getElementsByClassName('container');
// elem2_class[0].classList.add('bg-primary');

// elem2_class[0].classList.add('text-succcess');

// tn= document.getElementsByTagName('div');
// //console.log(tn);
// created_elem=document.createElement('p');

// created_elem.innerText="This is the new text added!";

// tn[0].appendChild(created_elem);

// selec_tag= document.querySelectorAll('.container');
// console.log(selec_tag);

// // js events mousedown,mouseup etc

// function click_event(){
//    console.log("This button has been clicket");
// }

// // Set Timeout and time setinterval

//     set_time_fn=()=>{
//     console.log("Timeinterval set!");
// }

// setTimeout(set_time_fn,5000);

// // Json
// json_obj={name: "inam", length:1, a:{this:'Tha"t'}}
// jso=JSON.stringify(json_obj);
// console.log(typeof jso);
// console.log(jso);

// parsed=JSON.parse({"name":"inam","length":1,"a":{"this":"Tha\"t"}});
// console.log(parsed);

// aysnc and promise and awaited

async function wheather(){
    let islamabad_wheather= new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("20 degree")
        },1000)
    })

    let kohat_wheather= new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("25 degree")
        },2000)
    })

    // islamabad_wheather.then(alert)
    // kohat_wheather.then(alert)

    let isb_w= await islamabad_wheather
    let koh_w= await kohat_wheather
    return [isb_w, koh_w]
}

console.log("Welcome to wheater control room:");
let w =wheather()

console.log(w);

// promise All
p1 = Promise.resolve(50);
p2 = 200
p3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 5000, 'geek');
});

Promise.all([p1, p2, p3]).then(function (values) {
    console.log(values);
});


//$.on('button', 'click', function onClick() {

function set_time(){
    setTimeout(function timer() {
        console.log('You clicked the button!');    
    }, 2000);
    //});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
}