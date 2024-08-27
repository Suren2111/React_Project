"use strict"
// var i=10;
// for(var i=1;i<=5;i++){
//     function close(i){
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000);
//     }
//     close(i);
    
    
// }
// console.log("Suren");
// console.log(i);

// var i=10;
// for(var i=1;i<=5;i++){
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000);
    
    
    
// }
// console.log("Suren");
// console.log(i);

// for(let i=1;i<=5;i++){
//     setTimeout(function() {
//         console.log(i);
//     }, i*1000);



// }
// console.log("Suren");


// function createGreeting(name) {
//     return function() {
//         console.log(`Hello, ${name}!`);
//     }
// }

// const greetJohn = createGreeting('John');
// greetJohn();

// const greetJane = createGreeting('Jane');
// greetJane();


// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//         return count;
//     }
// }

// const counter = createCounter()();
// const counter1 = createCounter()();
// console.log(counter);


// function outer(b){

//     function inner(){
//         console.log(a,b);
//     }
//     let a=10;
//     return inner;
// }

// function outest(){
//     //var c=100
//     function outer(b){

//         function inner(){
//             console.log(a,b,c);
//         }
//         let a=10;
//         return inner;
//     }
//     return outer; 
// }

// let c=10;

// let a=outest()("Hellow world");
// a();




// var count=0;
// function counter(){
//     count++;
// }

// function incrementcounter(){
//     var count=0;
//      return function counter(){
//     count++;
//     console.log(count);
//     }
// }

// var counter1=incrementcounter();
// counter1();//1
// counter1();//2

// var counter2=incrementcounter();
// counter2();//1


// function a(){
//     var x=10;
//     var y=20;
//     return function b(){
//         console.log(x);
//     }
// }
// var c=a();
// c();



// function attach(){
//     var count=0;
//     document.getElementById("CickMe").addEventListener("click", function xyz(){
//         console.log("Button is clicked",++count);
//     })
// }

// attach();


// function longRunningTask() {
//     let end = Date.now() + 5000; // 5 seconds
//     while (Date.now() < end) {
//         console.log("Long-running task is currently running",Date.now);
//     }
//     console.log("Long-running task completed.");
// }

// function shortTask() {
//     console.log("Short task executed.");
// }

// Queue the long-running task
// longRunningTask();

// // Queue a short task with a timeout
// setTimeout(shortTask, 0);




// const arr=[1,2,3,4,5];
// console.log(arr.map((x) =>{ return 2*x}));


// const users=[
//     {"firstname":"Suren", "age":24, "lastname":"sekar"},
//     {"firstname":"Vishnu", "age":24, "lastname":"priya"},
//     {"firstname":"Arun", "age":39, "lastname":"mohanlal"},
//     {"firstname":"Sanjay", "age":55, "lastname":"Das"},

// ];

//filter the object with firstname and lastname
// const output=users.map((x) =>{
//     return x.firstname +" "+x.lastname;
// });

// console.log(output);


//Count how many users have diff age, Like{24:2, 39:1, 55:1};

// const output=users.reduce((acc,curr) => {
//        if(curr.age in acc){
//         acc[curr.age]=++acc[curr.age];
//         // acc.curr.age=++acc.curr.age;
//        }  
//        else{
//         acc[curr.age]=1;
//        }
//        return acc;
// },{});
// console.log(output);

//First name of all peoples whose age is less than 30.

//using filter then map -laernt about concepts of chaining.

// const output=users.filter(function (x){
//     return x.age<30;
// }).map(function(x){
//     return x.firstname + " "+ x.lastname;
// })

// console.log(output);

//using reduce

// const output=users.reduce(function(acc,curr){

//     if(curr.age<30){
//         console.log(curr.firstname+' '+curr.lastname);
//         acc.push(curr.firstname+' '+curr.lastname);
//     }
//     return acc;
// },[]);
// console.log(output);

// const github_details=fetch('https://github.com/suren2111', { mode: 'no-cors' });
// github_details.then(function(){
//     console.log("github_details details are pulled");
//     return fetch('https://github.com/Suren2111/suren_Static_Application', { mode: 'no-cors' })
// })
// .then(function(){
//     console.log("suren_static Application is opened");
//     return fetch('https://github.com/Suren2111/suren_Static_Application/tree/mai/images', { mode: 'no-cors' })
// })
// .then(() => console.log("images in the static application is opened")).catch(() => console.log("Please check the URL post static Application page"));


// const cart=["shoes","shirts","bags"];
// cartOrderSummary(cart)
// .then(function(orderId){
//      console.log(orderId);
//      return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo)
//     return orderSummary(paymentInfo);
// })
// .then(function(orderresult){
//     console.log(orderresult);
//     return walletSummart(orderresult);
// })
// .then(function(walletresult){
//     console.log(walletresult);
// })
// .catch(function(er){
//     console.log(er.message);
// })



// function cartOrderSummary(cart){
//     const pr=new Promise(function(resolve,reject){
         
//         if(!validateCart(cart)){
//            const er=new Error("Cart is not valid");
//            reject(er);
//         }
//         else{
//             const orderId="12345";
//             resolve(orderId);
//         }

//     })

//     return pr;
// }

// function validateCart(cart){
//     return false;
// }

// function proceedToPayment(orderId){
//     const pr=new Promise(function(resolve,reject){
//         // const er=new Error("payment unsuccessfull")
//         // reject(er);
//         resolve("Payment was successfull");
//     })
//     return pr;
// }

// function orderSummary(paymentInfo){
//     return new Promise(function(resolve,reject){
//         // const er=new Error("Order unsuccessfull");
//         // reject(er);
//         resolve("Payment was successfull");
//     })
// }

// function walletSummart(orderresult){
//     return new Promise(function(resolve,reject){
//         // resolve("Amount is debited from your card");
//         const er=new Error("Amount is not debited from your card, Due to insufficient balance");
//         reject(er);
//     });
// }

// const promise=createPromise();
// promise.then((message) =>{
//     console.log(message);
// }).catch((err) =>{
//     console.log(err.message)
// })

// function createPromise(){
//     return new Promise(function(resolve,reject){
//         // resolve("Success");  
//         const err=new Error("Failure");
//         reject(err);
//     })
// }


// resolveNumber()
// .then(function(num){
//     console.log(num)
//     return multiplyNum(num);
// })
// .then(function(num){
//     console.log(num)
//     return subtractNum(num);
// })
// .then((num) => console.log(num));







// function resolveNumber(){
//     return new Promise(function(resolve,reject){
//         resolve(10);
//     })
// }

// function multiplyNum(num){
//     return new Promise(function(resolve,reject){
//         const n=num*2;
//         resolve(n);
//     })
// }

// function subtractNum(num){
//     return new Promise(function(resolve,reject){
//         resolve(num-3);
//     })
// }


// fetch('https://github.com/viratdhoni', { mode: 'cors' })
// .then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err.message);
// })


// const p1=new Promise((resolve, reject) => {
//     return setTimeout(()=>{
//         // resolve("P1 is resolved");
//         reject("P1 is rejected");
        
//     },1000);
// })

// const p2=new Promise((resolve, reject) => {
//     return setTimeout(()=>{
//         // resolve("P2 is resolved");
//         reject("P2 is rejected");
        
//     },2000);
// })

// const p3=new Promise((resolve, reject) => {
//     return setTimeout(()=>{
//         // resolve("P3 is resolved");
//         reject("P3 is rejected");
        
//     },3000);
// })

// Promise.any([p1,p2,p3])
// .then(function(result){
//    console.log(result);
// }).catch(function(err){
//     console.error(err.errors[0]);
// })






// const promise1=new Promise(function(resolve,reject){
     
// return setTimeout(() => {
//         resolve("Promise1 is  resolved");
//     }, 1000);

// })

// const promise2=new Promise(function(resolve,reject){
     
//     return setTimeout(() => {
//             resolve("Promise2 is  resolved");
//         }, 3000);
    
// })

// const all_promises=Promise.all([promise1,promise2]);

// all_promises.then(function(message){
//     console.log(message);
// }).catch(function(err){
//    console.error(err);
// })



// const promise5 = Promise.all([])
// promise5
// .then(value => console.log('Resolved with 5', value))
// .catch(value => console.log('Rejected with 5', value))



// const promise4 = Promise.all([
//     null,
//     undefined,
//     new Promise((resolve) => setTimeout(() => resolve(2), 350)),
//     {},
//     'Hello'
//     ])
// promise4
//     .then(value => console.log('Resolved with 4', value))
//     .catch(value => console.log('Rejected with 4', value))

// const promise1=Promise.all([
//     null,
//     1,
//     "suren",
//     {
//         "key":"value"
//     },
//     1.2,
//     undefined,
//     new Promise(function(resolve,reject){
//         return reject("rejected")
//     })
// ])

// promise1.then(array =>{
//     console.log(array);
// }).catch(error => { console.error(error)})




// const promise3 = Promise.all([
//     Promise.resolve(1),
//     new Promise((resolve, reject) => setTimeout(() => reject(2),
//     0)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
//     Promise.reject(4),
//     Promise.reject(5)
//     ])
//     promise3
//     .then(value => console.log('Resolved with 3', value))
//     .catch(value => console.log('Rejected with 3', value))

// const promise2 = Promise.all([
//     new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
//     Promise.resolve(2),
//     '4',
//     new Promise((resolve) => setTimeout(() => resolve(1), 0)),
//     Promise.resolve(5),
//     ])

//     promise2
//     .then(value => console.log('Resolved with 2', value))
//     .catch(value => console.log('Rejected with 2', value))


    // const promise1 = Promise.all([
    //     Promise.resolve(1),
    //     new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    //     Promise.resolve(3),
    //     4
    //     ])
    //     promise1
    //     .then(value => console.log('Resolved with 1', value))
    //     .catch(value => console.log('Rejected with 1', value))

// const input=[];
// Promise.all = function(input) {
//         // result arr to store the results of each promise
//         const result = [];
//         // counter to keep track if all the promises are resolved
//         let totalResolved = 0;
//         return new Promise((resolve, reject) => {
//         // If empty arr, we can immediately resolve with []
//         if (input.length === 0) {
//         return resolve(result);
//         }
//         input.forEach((elem, index) => {
//         // We need to wrap each `elem` in Promise.resolve(),
//         // since `elem` can be any value other than a Promise
//         Promise.resolve(elem)
//         .then((value) => {
//         result[index] = value;
//         totalResolved++;
//         if (totalResolved === input.length) {
//         resolve(result);
//         }
//         })
//         .catch((error) => reject(error))
//         })
//         })
//         }

// Promise.all(input).then(result=> console.log(result));


const input=[
    "suren",
    1.2,
    5,
    {
    "key":"value"
    },
    new Promise(function(resolve,reject){
        return resolve(5);
    }),
    [1,2,3,4,5,6]
]
// Promise.all=function(input){
//     const result=[];
//     if(input.length==0){
//         return new Promise(function(resolve,reject){
//             resolve(result);
//         })
//     }
//     else{
//         return new Promise(function(resolve,reject){
//             reject("The input array is not empty");
//         })
//     }
//  }

//  Promise.all(input)
//  .then(result => console.log(result))
//  .catch(err => console.error(err));

// const promise=Promise.all(input);






//  Promise.all = function(input) {
//     // result array to store the results of each promise
//     const result = [];
//     // counter to keep track if all the promises are resolved
//     let totalResolved = 0;
    
//     // Return a new promise that will resolve or reject based on the input promises
//     return new Promise((resolve, reject) => {
//         // If the input array is empty, resolve immediately with an empty array
//         if (input.length === 0) {
//             return resolve(result);
//         }
        
//         // Iterate over each element in the input array
//         input.forEach((elem, index) => {
//             // Wrap each element in Promise.resolve() to ensure it is a promise
//             // (elem can be a promise or any other value)
//             Promise.resolve(elem)
//                 .then((value) => {
//                     // Store the resolved value in the result array at the correct index
//                     result[index] = value;
//                     // Increment the counter to track the number of resolved promises
//                     totalResolved++;
                    
//                     // If all promises have resolved, resolve the entire Promise.all with the result array
//                     if (totalResolved === input.length) {
//                         resolve(result);
//                     }
//                 })
//                 .catch((error) => {
//                     // If any promise rejects, reject the entire Promise.all with the error
//                     reject(error);
//                 });
//         });
//     });
// }



// const promise1 = Promise.allSettled([
//     Promise.reject(1),
//     new Promise(function(resolve,reject){
//         return reject(2);
//     }),
//     Promise.reject(3),
//     Promise.reject(4)
//     ])
//     promise1
//     .then(value => console.log('Resolved with', value))
//     .catch(value => console.log('Rejected with', value))



    // const promise1 = Promise.allSettled([
    //     Promise.resolve(1),
    //     new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
    //     Promise.resolve(3),
    //     Promise.reject(4)
    //     ])
    //     promise1
    //     .then(value => console.log('Resolved with', value))
    //     .catch(value => console.log('Rejected with', value))


        // const promise2 = Promise.allSettled([
        //     new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
        //     Promise.resolve(2),
        //     '4',
        //     new Promise((resolve) => setTimeout(() => resolve(1), 0)),
        //     Promise.resolve(5),
        //     ])
        //     promise2
        //     .then(value => console.log('Resolved with', value))
        //     .catch(value => console.log('Rejected with', value))


        // const promise3 = Promise.allSettled([
        //     Promise.resolve(1),
        //     new Promise((resolve, reject) => setTimeout(() => reject(2),
        //     0)),
        //     new Promise((resolve, reject) => setTimeout(() => reject(3),
        //     2000)),
        //     Promise.reject(4),
        //     Promise.reject(5)
        //     ])
        //     promise3
        //     .then(value => console.log('Resolved with', value))
        //     .catch(value => console.log('Rejected with', value))




// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'foo'),
// );
// const promises = [promise1, promise2];

// const promiseall=Promise.allSettled(promises)

// promiseall.then((results) =>
//     results.forEach((result) => console.log(result.status)),
//   );
// const promise2 = Promise.race([
//     new Promise((_, reject) => setTimeout(() => reject(3),
//     2000)),
//     Promise.reject(2),
//     '4',
//     new Promise((_, reject) => setTimeout(() => reject(1), 0)),
//     Promise.reject(5)
//     ])
//     promise2
//     .then(value => console.log('Resolved with 2', value))
//     .catch(value => console.log('Rejected with 2', value))

// new Promise(function(resolve,reject){
//         reject("Operation failed!");
    
// })
// .then(result => console.log(result))
// .catch(err => console.error(err));

// Create a series of promises:

// The first promise resolves with a number (e.g., 10).
// The second promise multiplies that number by 2.
// The third promise subtracts 5 from the result.
// Chain these promises together and log the final result.

// const promises=Promise.all(
//     [
//         new Promise(function(resolve,reject){
//             setTimeout(() => {
//                 resolve("promise1")
//             }, 1000);
//         }),
//         new Promise(function(resolve,reject){
//             setTimeout(() => {
//                 resolve("promise2")
//             }, 2000);
//         }),
//         new Promise(function(resolve,reject){
//             setTimeout(() => {
//                 resolve("promise3")
//             }, 3000);
//         })
//     ]
// )

// promises.then(() => console.log("resolved"));

// const promises=Promise.race([
//      new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve("promise 1")
//         }, 2000);
//     }),

//      new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve("promise 2")
//         }, 5000);
//     }),

// ])

// promises.then(result => console.log(result));

// function getPromise(){
//     p1.then(res => console.log(res));
// }

// getPromise();

// async function getPromise() {
//     const val=await p1;
//     console.log(val);
// }

// getPromise();

// Exercise1: With old promise method


// const p1=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Promise1 is resolved"); 
//     }, 1000);
   
// })


// const p2=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Promise2 is resolved"); 
//     }, 2000);
   
// })

// function getData(){
//      p1.then(res => console.log(res));
//      p2.then(res => console.log(res));
//      console.log("Namaste Suren");

// }
// getData();


// Exercise1: With async and await:


// const p1=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Promise1 is resolved"); 
//     }, 1000);
   
// })


// const p2=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Promise2 is resolved"); 
//     }, 2000);
   
// })

// async function getData(){
//     const val1=await p1;
//     console.log(val1);
//     const val2=await p2;
//     console.log(val2);
//     console.log("Namaste Suren");

// }
// getData();

// Exercise2: With async and await:


// const p1=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Promise1 is resolved"); 
//     }, 20000);
   
// })


// const p2=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("Promise2 is resolved"); 
//     }, 40000);
   
// })

// async function getData(){
//     console.log("Namaste Javascript");
//     const val1=await p1;
//     console.log(val1);
//     const val2=await p1;
//     console.log(val2);
//     console.log("Namaste Suren");

// }
// getData();

// const URL="https://github.com/suren2111";
// async function getData(){
//   const getuser= await fetch(URL);
// //   const data=await getuser.json();
// //   console.log(data);
// }

// getData();




// const student1={
//     "name":"suren",
//     printName: function x(){
//         console.log(this.name);
//     }
// }


// const student2={
//     "name":"Virat",
// }

// student1.printName.call(student2);



// const obj={
//     "name":"virat",
//     printName: function(){
//         const temp=()=>{
//           console.log(this);
//         }
//         temp();
//     }
// }

// obj.printName();

// const arr1=[1,2];


// function add_multiply([a,b]){
//   return[a+b, a*b,a/b];
// }
// const [add, multiply, division='No More Division']=add_multiply(arr1);
// console.log(add);
// console.log(multiply);
// console.log(division);

const user1={
    "name" : "suren",
    "age" : 24,
    "address": {
        "street" : 12,
        "city" : "trichy",
        "state": "tamilnadu"
    }
}

const user2={
    "name" : "Lokesh",
    "age" : 20,
    "address": {
        "street" : 21,
        "city" : "mumbai",
        "state": "maharastra"
    }
}

// const{ name:firstname="empty", age, mobilenumber="empty"}=user2;
// console.log(firstname);
// console.log(age);
// console.log(mobilenumber);

const users={...user2};
console.log(users);




















    
    

            
            
        
    










        
        
    
    
    
    








































