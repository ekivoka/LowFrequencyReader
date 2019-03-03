var bh = document.getElementById('bh');
var dh = document.getElementById('dh');
var ba = document.getElementById('ba');
var da = document.getElementById('da');
var water = document.getElementById('water');
var duck = document.getElementsByClassName('duck');
var d =  document.getElementsByClassName('d');
var ship = document.getElementById('ship');
var bread = document.getElementById('bread');
var kook= document.getElementById('kook');
var shipswim = 1;
var eating = 1;
var audio = new Audio('Kalimba.mp3');


randMoveBody();

	d[0].style.left = 10+"px";
	d[0].style.top = 900+"px";	
		
	d[1].style.left = 100+"px";
	d[1].style.top = 400+"px";
		
	d[2].style.left = 300+"px";
	d[2].style.top = 800+"px";

	d[3].style.left = 300+"px";
	d[3].style.top = 800+"px";



water.onclick = function(event){
	var x,y;
	
	
	
	
	if(shipswim){ 
		shipswim = 0;
		audio.volume = 0.0;
		audio.play();
		setTimeout(function() {
		shipAppearing();	
		
		}, 15000);
				
	}
	
	
	x = event.pageX;
	y = event.pageY;
	eating = 0;
	throwbread(x,y);
	
	for(var i = 0; i<4;i++){
		d[i].style.transition= "top 2s, left 2s,transform 1s";
		moveDuck(i,x,y);	
		eat(i,x,y);
	}
	
	setTimeout(function() {
		for(var i = 0; i<4;i++){
			x = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
			y = Math.floor(Math.random() * (600 - 0 + 1)) + 0;
			d[i].style.transition= "top 5s, left 5s,transform 1s";
			moveDuck(i,x,y);	
		}
	}, 2000);
	
	
}


function shipAppearing(){
	
	audio.volume = 0.001;
	audio.play();
	ship.style.transition= "left 20s";
	ship.style.left = "2000px";
	
	 time1 = setInterval(function(){
		 audio.volume += 0.1;
		
	 }, 1000);
	 
	setTimeout(function() {
		clearInterval(time1);
		time2 = setInterval(function(){
			 audio.volume -= 0.1;
			console.log(audio.volume); 
			if(audio.volume < 0.1){
				ship.style.transition= "left 0s";
				ship.style.left = "-600px";
			}
		 }, 800);
		 
		 setTimeout(function() {
			clearInterval(time2);
			shipswim = 1;
			audio.stop();
		 }, 6000);
		 
		 
	}, 7000);
	
	
}



function moveDuck(i,x,y){
	var a,b=0;
		
		if((d[i].style.top != y+"px")||(d[i].style.left != x+"px")){
			var box = d[i].getBoundingClientRect();
			
			
			
			
			if(box.left < x) {
				
				duck[i].style.transform = "scaleX(-1)";
				
				b = 1;
			}	
			else {
				duck[i].style.transform = "scaleX(1)";
				/* setTimeout(function() {
					d[i].style.transform =  "rotate("+ -20 + "deg)";
				}, 1000);
				
				setTimeout(function() {
					d[i].style.transform =  "rotate("+ 0 + "deg)";
				}, 1500);
				*/
			}
			
			d[i].style.left = x+"px";
			d[i].style.top = y-30+"px";
			
			
		}
	
	
	
}


function eat(i,x,y){
	
	var box = d[i].getBoundingClientRect();
	if(box.left < x) {
		
		
		 setTimeout(function() {
			d[i].style.transform =  "rotate("+ 20 + "deg)";
		}, 1000);
		
		setTimeout(function() {
			d[i].style.transform =  "rotate("+ 0 + "deg)";
		}, 1500);
		
	}	
	else {
		
		 setTimeout(function() {
			d[i].style.transform =  "rotate("+ -20 + "deg)";
		}, 1000);
		
		setTimeout(function() {
			d[i].style.transform =  "rotate("+ 0 + "deg)";
		}, 1500);
	}
	
	
}

function randMoveBody(){
	var randtime= Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
	var timer  = setInterval(moveBody, randtime);
		
}

function moveBody(){
	var n = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
	bh.style.transform =  "rotateZ(-"+ n + "deg)";
	var i;
   setTimeout(function() {
	bh.style.transform =  "rotateZ(-"+ n + "deg)";

	}, Math.floor(Math.random() * (3000 - 0 + 1)) + 0);
	
	n = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
	da.style.transform =  "rotateZ("+ n + "deg)";
	n = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
	ba.style.transform =  "rotateZ(-"+ n + "deg)";
	

	
	
	setTimeout(function() {
	for(i = 0; i<4;i++){
		x = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
		y = Math.floor(Math.random() * (600 - 0 + 1)) + 0;
		d[i].style.transition= "top 10s, left 10s,transform 1s";
		
		if (eat) moveDuck(i,x,y);	
		}
	},Math.floor(Math.random() * (3000 - 0 + 1)) + 0 );
	
}
function throwbread(x,y){
	da.style.transform =  "rotateZ(-"+ 20 + "deg)";
	bread.style.opacity = "1";	
	bread.style.transition= "bottom 0.5s,left 3s, opacity 1s";
	bread.style.bottom = "500px";
	bread.style.left = x+ "px";
	bread.style.opacity = "0";
	
	kook.style.top = y+"px";
	kook.style.left = x+"px";
	kook.style.opacity = 1;
	setTimeout(function() {
			bread.style.transition= "bottom 0s, left 0s,opacity 0s";
			bread.style.bottom = "200px";
			bread.style.left = "465px";
			
			kook.style.opacity = "0";	
			eating = 1;
		}, 3000);
		
	
}
