
const reviews =[

{
    id: 1,
    name: 'Makayla amoto',
    job: 'web desighner', 
    img: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/528025557_1495140968358821_8081948592148666426_n.jpg?stp=dst-jpg_p480x480_tt6&amp;_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=0024fc&amp;_nc_ohc=2j2dQjv6teAQ7kNvwEN6ssS&amp;_nc_oc=AdliAm0F2JMKxAAsNbqj_KRR9-mmzMeSIQihOTl2r9p5ME7xGFBWsRcmJBkUd0cdaFA&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_zt=23&amp;_nc_ht=scontent-lga3-2.xx&amp;oh=03_Q7cD3AHISjdAoyZaGM9ZybHerZKp_RCqKZcNRrRdfXWB1TAXtA&amp;oe=68C1CF5C',
    text: 'working with aminata was a great experience,she is a hardworker and i would recommend her to anyone looking for a web desighner',
},

{
    id: 2,
    name: 'Margareth Sanchez',
    job: 'Web Designer',
    img: 'https://scontent-lga3-3.xx.fbcdn.net/v/t1.15752-9/526594886_1293349285714981_854072290Lorem ipsum dolor sit amet consectetur adipisicing e7347812608_n.jpg?stp=dst-jpg_s640x640_tt6&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=0024fc&amp;_nc_ohc=ZDVQLQosvdQQ7kNvwFzXm-p&amp;_nc_oc=Adm8GN_HznWmh2QrAkbCiEzhkcU6Xwg-5K2mzUSTQ9xJrMpCfiB-5_oXxUrYcsQAug4&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_zt=23&amp;_nc_ht=scontent-lga3-3.xx&amp;oh=03_Q7cD3AE7l5yOYOku9KB2PO0RaWTWxVY1ebMOV3utSdcwL-c5JQ&amp;oe=68BDC4C2',
    text: ' me and aminata have not only worked together but are also classmates, she is a great person to work with and i would recommend her to anyone looking for a web desighner',
},

{
    id: 3,
    name: 'Shelby Shoup',
    job: 'Teacher',
    img: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/527307298_1576785950393501_7499758611809741462_n.jpg?_nc_cat=111&amp;ccb=1-7&amp;_nc_sid=0024fc&amp;_nc_ohc=-Vfry1uKYvcQ7kNvwF58X7c&amp;_nc_oc=Adn_IFxryS1oUNdBoTymYMLvnn9oudU-5gnqB3l4yE6qZg0ZFdOvImBxTXMHCpZTU7E&amp;_nc_ad=z-m&amp;_nc_cid=0&amp;_nc_zt=23&amp;_nc_ht=scontent-lga3-1.xx&amp;oh=03_Q7cD3AEPH2o7JZPMtnJnn83fedRCDb_KmcE2KBCMm30a66AEfw&amp;oe=68BDEEF6',
    text: 'Aminata is a great student, she helps her classmates and is always willing to help others, i would recommend her to anyone looking for a website desighner',
}
];
//select items
const img= document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
   const item = reviews[currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
});

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
}

prevtBtn.addEventListener('click', function (){
currentItem--;
if(currentItem < 0 ) {
    currentItem = reviews.length-1;
}
showPerson(currentItem);
});


nextBtn.addEventListener('click', function (){
currentItem--;
if(currentItem >  reviews.length - 1){
    currentItem = 0;
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