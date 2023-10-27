/*How to compare two JSON have the same properties without order? 
a.)     let obj1 = { name: "person 1" , age 5 };
b.)     let obj2={ age:5, name:"person 1"};*/
var obj1 = { name: "person 1", age: 5 };
var obj2 = {age: 5, name: "person 1"};


var obj1String = JSON.stringify(obj1);
var obj2String = JSON.stringify(obj2);


if (obj1String === obj2String) {
  console.log("The JSON objects are equivalent.");
} else {
  console.log("The JSON objects are not equivalent.");
}


/*2 Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console*/

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data =request.response;
    var result =JSON.parse(data);
    console.log(result);
    
    
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);}
} 

//3. Use the same rest countries and print all countries names, regions, sub-region and populations

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
    var data =request.response;
    var result =JSON.parse(data);
    console.log(result);
    
    
    for(var i=0;i<result.length;i++){
        console.log(result[i].countriesnames);}
        for(var i=0;i<result.length;i++){
            console.log(result[i].region);}
            for(var i=0;i<result.length;i++){
                console.log(result[i].subregion);}
                for(var i=0;i<result.length;i++){
                    console.log(result[i].population);}

} 