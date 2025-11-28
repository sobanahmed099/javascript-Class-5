let arr=[

    [ ], 
    [ ],
    [ ]
];



arr[0][0]=  ` 0,1,2,3 `
arr[1][0]= ` 1,0,1,2 `
arr[2][0]= ` 2,1,0,1 `
console.log(arr[0][0]);
console.log(arr[1][0]);
console.log(arr[2][0]);



for(let i = 0; i <= 10; i++){
    console.log(i);
}




let num = +prompt("Enter a num and its table will appear on your sceen")
let length = +prompt("Enter length of table ")
for(let i = 1; i <= length; i++){
    document.write(`${num} x ${i}  =  ${num*i} <br>`)
 }



let fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log("Element at index 0 is " + fruits[0]);
console.log("Element at index 1 is " + fruits[1]);
console.log("Element at index 2 is " + fruits[2]);
console.log("Element at index 3 is " + fruits[3]);
console.log("Element at index 4 is " + fruits[4]);





document.write("Counting: <br><br>")
for(let i = 1; i<=15; i++){
    document.write(i+",");
}
document.write("<br><br> Reverse Counting: <br><br>")
for(let x =10; x>=1; --x){
    document.write(x+ ",")
}
document.write("<br><br> Even Number: <br><br>")
for(let y=0; y<=20;y++){
    if(y%2==0){
        document.write(y+",");
    }
}
document.write("<br><br> Odd Number:<br> <br>")
for(let y=0; y<=20;y++){
    if(y%2!==0){
        document.write(y+",");
    }
}
document.write("<br><br> Series: <br><br>")
 for(let y=1; y<=20;y++){
    if(y%2==0){
        document.write(y+"k,");
    }
}



var x = prompt("Welcome to ABC Bakery, What do you want sir/maam")
var y = ["cakes","apple pis","cookies","chips","patties"]
if(y.includes(x)) {
    alert(x + " is available at index "  + y.indexOf(x) + " in our bakery  ");
}else{
    alert("We are sorry, " + x + " is not available in our bakery ");
}



// let items= [24, 53, 78, 91, 12]
// document.write("Array Items:  "  + items   )
// document.write("<br> The largest Number is " )
// var largest = items[0] 
// for(let i = 0; i = items.length; i ++){
// if (items[i]> largest){
//     largest= items[i]
// }
// }
// document.write(largest)


// let items= [24, 53, 78, 91, 12]
// document.write("Array Items:  "  + items   )
// largestNumber = 
// document.write("The largest Number is" )





for(let a=1; a<=100; a++){
    if(a%5==0){
        document.write(a +",")
    }
}












