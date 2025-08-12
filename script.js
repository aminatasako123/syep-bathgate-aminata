
const reviews =[
{
    id: 1,
    name: 'Makayla amoto',
    job: 'web desighner', 
    img: 'photo.jpg',
    text: 'working with aminata was a great exprience shes thoughtful and dedicated to what she does',
},

{
    id: 2,
    name: 'Margareth Sanchez',
    job: 'Web Designer',
    img: 'picture.jpg',
    text: ' me and aminata have not only worked together but are also classmates, she is a great person to work with ',
},

{
    id: 3,
    name: 'Shelby Shoup',
    job: 'Teacher',
    img: 'shoup.jpg',
    text: 'Aminata is a great student, she helps her classmates and is always willing to help others, i would recommend her to anyone looking for a website desighner',
}
];
//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn'); // make sure HTML uses .prev-btn
const nextBtn = document.querySelector('.next-btn'); // make sure HTML uses .next-btn

let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});












//console.log("Hello World!")

// let myString = "a2b3c";
// console.log(myString);

// let myNumVar = 123;
// console.log(typeof myNumvar);

// console.log(10 + "eggs");
// console.log(10 + 7 + "eggs");
// console.log("eggs" + 10 + 7);

// //Both Conditions Need to be true
// console.log(7>3)&&(5<10);

// //One condition must be true
// console.log(10>3)||(10>12);
// //If the statemnt is logical or not
// console.log(!5>3);



// function introduction(name, age){
//     console.log("Hello, my name is " + name + "and i am"+ age + "years old")
// }

// introduction("Aminata", 14)

// const hour = new Date().getHours();
// let greeting = "";

// if (hour<12){
//     greeting = "Good morning";
// }else if (hour < 18){
//     greeting = "Good afternoon";
// }else{
//     greeting ="Good evening";
// }

// document.getElementById("greeting").innerText=greeting;