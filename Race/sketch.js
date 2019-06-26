var x1=645;
var y1=70;
var g,b,g2,b2,r=100;
var r2=0;
var speed=5;
var timerValue,count=0;
var finish=false;
var test=true;
var bub, bub1,counter;
var dq,flag=false;
var MenuS=true;
var topscore= [9999,9999,9999,9999,9999];
var buttonC=240;
var colorbutton=230;
var easyColor,mediumColor1,hardColor1,button1C=255;

function setup() {
	createCanvas(1540, 810); 
  bub1=new outer(width/2-50,height/2);
	bub= new inner(width/2-50,height/2);
	}

function draw() {
	//Game Controls
if (keyIsDown(LEFT_ARROW) && MenuS==false){
	x1=x1-speed
	if (x1<=644){
		if(timerValue==0){
			timerValue=timerValue+1
			counter=setInterval(timer,1000);
			}
		}
	}
if(keyIsDown(RIGHT_ARROW) && MenuS==false){
	x1=x1+speed
}
if(keyIsDown(UP_ARROW) && MenuS==false){
	y1=y1-speed
}
if(keyIsDown(DOWN_ARROW) && MenuS==false){
	y1=y1+speed
}

background(r2,g2,b2);
bub1.display();
bub.display();
stroke(255,0,0);
fill(0,255,0);
textSize(20);
if (timerValue < 240) {
	text("Your Time is: \n" + timerValue + " seconds", 100, 100);
} else if (timerValue>240){
	dq=true;
	text ("OUT OF TIME \n"+ "GAME OVER",80,100);
}	
 text("Hold down left arrow to start!", 600,20);
 text("BETA 3.0",1450,780);
 text(20);
 fill(0,colorbutton,0);
rect(width/2-55,25,12,75); //Finish Line

fill(0,255,0);
ellipse(x1,y1,30,30); //Car

//Text stuff
text("Want to try again?",width/2-120,325);
text("This way \n"+ "<<<<<<",500,115)
text("Lap: "+count,100,80);
text ("How to Play: \n"+ "Using the Arrow Keys and \nMoving Counter-Clockwise,\nGuide the Car (Small Green Circle)\nAround the White Track Three Times\nFor the Shortest Time Possible.",1150,50);
text("Warning: Going Outside the Track \nResults in Time Added and Exceeding \nFour Minutes Results in Game Over!", 1150, 375);
textSize(30);
text ("Your Lowest Times: \n1. " + topscore[0] + " Seconds \n2. " + topscore[1]+ " Seconds \n3. "+ topscore[2]+ " Seconds \n4. "+ topscore[3]+ " Seconds \n5. "+topscore[4]+ " Seconds",50,250);

//Finish Line Checks 
if (!(x1>=717&&x1<=723)&& !(y1>=25&&y1<=105)){
flag=false;
}
if ((x1>=717&&x1<=723)&& (y1>=25&&y1<=105 && finish==false && timerValue<=5)){
restart();
count=0;
}
if ((x1>=717&&x1<=723)&& (y1>=25&&y1<=105 && finish==false && flag==false)){ //Checks if circle passes finish line: resets if player caught cheating
	flag=true;

if (count==0 && flag==true && dq==false){
		count=1;
	} else if (count==1){
		count=2;
	} else if (count==2 && flag==true){
		count=3;
		}
	}  
if (count>=3 && timerValue<18) { //Checks for cheating, otherwise finish race
	restart();
	clearInterval(counter);
	} else if (count>=3) {
	clearInterval(counter);
	finish=true;
	textSize(20);
	text("Done! \nFinal Time: "+timerValue+ " seconds.",width/2-130,200);
	 if (timerValue<topscore[4]){
		 topscore[4]=timerValue;
		 }
		 
	}

	//Boundaries
var d=dist(x1,y1,bub.x,bub.y);
var d2=dist(x1,y1,bub1.x,bub1.y);
if (d < 15+bub.r && finish==false && timerValue==0){
	restart(); //Dummy proof lmao
} else if (d < 15+bub.r && finish==false){
	r=240;
	g=0;
	b=0;
	timerValue=timerValue+1; 
} else {
	r=100;
	g=100;
	b=100;
}
	if (d2>bub1.r-5 && finish==false && timerValue==0){
	restart(); //For dumbos
	} else if (d2>bub1.r-5 && finish==false){
		r2=240;
	b2=0;
	g2=0;
	timerValue=timerValue+1;
} else {
    r2 =150;
    g2=50;
    b2=50;
}
textSize(20);
if (dq==true){
	text("You ran out of time! \nClick Restart to start over",width/2-130,500);
}
	
//Game Buttons
fill(0,buttonC,0);
rect(width/2-90,350,100,30); //Restart Button 
fill(0,button1C,0);
rect (width/2-90,400,100,30); //Menu button
fill(100);
textSize(20);
text("RESTART",width/2-85,373);
text("MENU",width/2-70,422);
 //MENU/START SCREEN
if (test){       
fill(r2,g2,b2);
stroke(255,0,0);
rect(0,0,1540,810);
fill(0,colorbutton,0);
rect(650,300,240,100); //Start
fill(0,mediumColor1,0);
rect (710,550,120,50);//Medium
fill(0,255,0);
textSize(100);
text("DOT = CAR",490,100);
fill (0,hardColor1,0);
rect (930, 550, 120,50);// Hard
textSize(30);
fill (0,easyColor,0);
rect (480, 550, 120, 50);// Easy
fill(100);
text("Easy                 Medium                Hard\n      Select Difficulty Before Starting",510,585);
textSize(65);
fill(0,255,0);
text("Can you complete the track?",370,200);
text("Beta 3.0",650,785);
fill(100);
text("START",670,375);
	}
} //End of Draw

function mousePressed() {
  if ((mouseX>=width/2-90 && mouseX<=780) && ( mouseY>350 && mouseY<380) && MenuS==false){ //Restart Button 
buttonC=0;
}
	if ((mouseX>width/2-90 && mouseX<=780) && (mouseY>400 && mouseY<430) && MenuS==false){ //ToMenu Button
	button1C=0;
		}
	
		if ((mouseX>=650 && mouseX<=890) && (mouseY>=300 && mouseY<=400) && MenuS==true){ //Start Button
		colorbutton=0;
	}
if ((mouseX>=480 && mouseX<=600) && (mouseY>=550 && mouseY<=600)&& MenuS==true){ //Easy
easyColor=0;
mediumColor1=255;
hardColor1=255;
speed=3;
}
if ((mouseX>=710 && mouseX<=830) && (mouseY>=550 && mouseY<=600)&& MenuS==true){ //Medium 
		mediumColor1=0;
		easyColor=255;
		hardColor1=255;
	 speed=5;
	}
if ((mouseX>=930 && mouseX<=1050)&& (mouseY>=550 && mouseY<=600)&& MenuS==true){ //hard
		hardColor1=0;
		easyColor=255
		mediumColor1=255;
		speed=7;
	}
	}
	
	function mouseReleased(){
		if ((mouseX>=width/2-90 && mouseX<=780) && ( mouseY>350 && mouseY<380) && MenuS==false){ //Restart Button
	 buttonC=255;
	 restart();
	 }
		if ((mouseX>width/2-90 && mouseX<=780) && (mouseY>400 && mouseY<430) && MenuS==false){ //ToMenu Button
			button1C=255;
			if (test){
				test=false;
			} else {
				test=true;
				MenuS=true;
				restart();
				topscore=[9999,9999,9999,9999,9999];
		}
			}
			if ((mouseX>=650 && mouseX<=890) && (mouseY>=300 && mouseY<=400) && MenuS==true){ //Start Button
				test=false;
				colorbutton=255;
				MenuS=false;
				restart();
					}
	}
function restart(){
 clearInterval(counter);
 timerValue=0;
x1=645;
y1=70;
count=0;
finish=false;
dq=false;
topscore.sort(function(a, b){return a-b});
}
function timer() {
	timerValue++
	  if (timerValue >= 240) {
		 clearInterval(counter);
		 createP("Time's up!");
		 finish=true;
		 	}
		 }
	
	
	
	


