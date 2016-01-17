steve ={};
steve.name="steve";
steve.helloMessage= function(){
	console.log("Hello my name is " + this.name);
  return this.name;
};
steve.helloMessage();



/*
READ NOTES from the NotePad ON MAC about Guy Class.
*/
var Person= function(name){
var obj= {name: name};
this.Hello= function(){
	console.log("hello my name is " + obj.name);
	};
};
var chris= new Person("chris");
chris.Hello();



var Person1= function(dudesName){
this.name=dudesName;
};

Person1.prototype.hella= function(){
	console.log("hello my name is " + this.name);
};

var Sam= new Person1("sam");
Sam.hella();

var Ned= new Person1("ned");
Ned.hella();







var Person= function(name){
this.name= name;
Person.prototype.Hello= function(){
	console.log("hello my name is " + this.name);
	};
};
var chris= new Person("tyler");
chris.Hello();
var dave= new Person("dave");
dave.Hello();




var Guy= function(age){
//this.dude = {age:age} would make dude belong to Guy ... Johny Vu message
	var dude={age: age};
  this.sayHello=function(){
  	console.log("hey im a guy and I'm " + dude.age + " years old");
  };
};
var Peter= new Guy(100);
Peter.sayHello();

/*class without prototype*/
var Cars= function(speed){
	this.speed= speed;
  this.faster= function(){
  this.speed++;
	console.log(this.speed);
 };
};
var justin= new Cars(56);
justin.faster();

var pual= new Cars(57);
pual.faster();



/*class with prototype, why do this?*/
var Carz= function(speed2){
this.speed2= speed2;
};
Carz.prototype.faster2=function(){
	this.speed2++;
  console.log(this.speed2);
};

angela= new Carz(58);
angela.faster2();

zack= new Carz(59);
zack.faster2();



var Car= function(loc){
	var obj5= {loc: loc};//obj5 does not have 
  this.move= function(){//"this" is the parent object(Car/nissan) not (obj5)
  	obj5.loc++;//is refered to by the Car function
    console.log(obj5.loc);
  };
};
var nissan= new Car(4);
nissan.move();

var fighter= function(name,height,weight,style){
this.name=name;
this.height= height;
this.weight= weight;
this.style= style;
console.log(this.name);
};

var tiagoAlves= new fighter("Tiago","159cm","64kg","southpaw");
var donaldCerony= new fighter("Donald","168cm","70kg","kickboxer");
console.log(donaldCerony.height);



var fighter= function(name,height,weight,style){
  var h = height;

  this.name=name;
  this.weight= weight;
  this.style= style;
  
  this.getHeight = function() {
    return h;
  }
  
console.log(this.name);
};

var tiagoAlves= new fighter("Tiago","159cm","64kg","southpaw");
var donaldCerony= new fighter("Donald","168cm","70kg","kickboxer");
console.log(donaldCerony.getHeight());




var Ingred= function(name,kcal,fat,col,sod,carb,sugar,pro){
  this.name=name;
  this.kcal=kcal;
  this.fat=fat;
  this.col=col;
  this.sod=sod;
  this.carb=carb;
  this.sugar=sugar;
  this.pro=pro
};

blackBean= new Ingred("black beans","300 kcals","0.9g","0mg","9mg","63g","2.1g","21g");
chicken= new Ingred("chicken","239 kcal","14g","88mg","82g","0g","0g","27g");
console.log(blackBean.fat);


var menu = { 
"food":{
  "chickenbeans":{ 
  "ingredients": [blackBean, chicken]
  },
  
  "Spicy Chicken Risotto Fritters":{
    "ingredients": [chicken,"pancetta","pepperJack Cheese"],
  },
}
};

console.log(menu.food.chickenbeans.ingredients[0]['kcal']);
console.log(menu.food['Spicy Chicken Risotto Fritters']['ingredients'][0]['fat']);
console.log(menu.food['Spicy Chicken Risotto Fritters']['ingredients'][1]);


