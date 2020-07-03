//التمرين الاول
//1.1
function loop(){
  let  colors = ["red","blue","green","black","white" ];
   colors.forEach(Function(logger)); {
     console.log(logger);
   }
    
  }
  
  //  function logger (colors){

  //  }

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);
// }

//1.2
let  hottestDays =[25,60,45,50,59 ];

hottestDays.filter(myfun);

function myfun (z){

  return z > 50
}

//1.3
let books = [
   { 
     name:"History",
     id:2,
   },

   {
     name:"Math",
     id:4,
   },

   {
     name:"science",
     id:6
   },

];


booksbyid(books,2)

function booksbyid(books,id){
  
  // for(let i=0; i<books.length; i++){
  for(i of books){
  if(i.id==id){
  console.log("متوفر");
  }
  else {console.log("غير متوفر");

  }
 }
}

//التمرين الثاني

//2.1



let market =[ 
  {name: "" ,  quantity: 0 , price: 0 },

  ];

  let done =[""]
  let name =[""]
  let quantity =[]
  let price =[]
  //2.2
//  function market () {
  while (done !="انتهيت") {
   name = prompt=(" ادخل السلعة  ");
   quantity= parseFloat(prompt=( "ادخل الكمية"));
   price =  parseFloat(prompt=( "ادخل السعر"));
  done=prompt=("اكتب انتهيت عند الانتهاء ");
  market.push(name );
  market.push(quantity);
  market.push(price);

}
//  };


// 2.3الفاتورة 

function cart() {
  for( let counter=quantity=[],price=[];  counter= market.length;  ){
    console.log(" الفاتورة ");
    console.log(market[counter]);


  }
}




//function cart () {
// for(  
//    console.log("الفاتورة");

//  };
  

//var cars = ["BMW", "Volvo", "Saab", "Ford"];
//var i = 0;
//var text = "";
//while (cars[i]) {
  //text += cars[i] + "<br>";
  //i++;
//}

