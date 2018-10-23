// alert("connected");
var max = 20, min = 0;
var chenhLech = [-1, 0, 1];
var toanTu = [
	{
		name: "+",
		calculation: function(x,y){
			return x + y;
		}
	},
	{
		name: "-",
		calculation: function(x,y){
			return x - y;
		}
	},
	{
		name: "x",
		calculation: function(x,y){
			return x * y;
		}
	},
	{
		name: "÷",
		calculation: function(x,y){
			return x / y;
		}
	}
];
var num1, num2, num3, diem = 0, temp;

var doan = document.querySelectorAll("p");
var btn = document.querySelectorAll("button");
var timeOutID, countDown;
	
function timeOut() {
	countDown = 10;
	var Countdown = setInterval(function(){
		document.querySelector("#time").innerHTML = "Countdown: " + countDown;
		if (countDown === 0) {
		    alert('Time Out...');
		    loss();
		}
		document.querySelector("#time").style.backgroundColor = "white";
		if (countDown % 2 === 0) {
			document.querySelector("#time").style.backgroundColor = "red";
		}
		countDown --;
	}, 1000);
}
function random(){
	temp = Math.floor(Math.random()*toanTu.length);
	document.querySelector("#operator").innerHTML = toanTu[temp].name;
	num1 = Math.floor(Math.random() * (max - min + 1)) + min;
	num2 = Math.floor(Math.random() * (max - min + 1)) + min;
	if (temp === 3) {
		while (num1 % num2 !== 0) {
			num2 = Math.floor(Math.random() * (num1 - min)) + min + 1;
		}
	}
	num3 = toanTu[temp].calculation(num1, num2) + chenhLech[Math.floor(Math.random()*chenhLech.length)];
}
function setValue(){
	doan[0].textContent = num1;
	doan[2].textContent = num2;
	doan[3].textContent = num3;
}
function right(){
	countDown = 10;
	diem++;
	random();
	setValue();
}
function loss(){
	alert("GAME OVER.\nYOU HAVE " + diem +" POINT.\nREFRESH TO PLAY AGAIN...");
	location.reload();
}

timeOut();
random();
setValue();

btn[0].addEventListener("click",function(){
	if (num3 === toanTu[temp].calculation(num1, num2)) right();
	else loss();
});
// change style
// document.querySelector("#btn1").onclick = function(){
// 	document.querySelector("#csslink").href = "css1.css";
// };

btn[1].addEventListener("click",function(){
	if (num3 !== toanTu[temp].calculation(num1, num2)) right();
	else loss();
});