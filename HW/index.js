let millisec = 0;
let seconds = 0;
let timer;

function display(){

  if (millisec>=9){
     millisec=0
     seconds+=1
  }
  else
     millisec+=1
     document.d.d2.value = seconds + "." + millisec;
     timer = setTimeout("display()",100);
  }

function starttimer() {
	
  if (timer > 0) {
	return;
  }
  display();	
}
function stoptimer() {
  clearTimeout(timer);
  timer = 0;
}

function startstoptimer() {
  if (timer > 0) {
     clearTimeout(timer);
     timer = 0;
  } else {
     display();
  }
}


function resettimer() {
	stoptimer();
	millisec = 0;
	seconds = 0;
}


//NEWWWWWWWWWWWWWWWWWWWWWW


function display1(){

  if (millisec>=9){
     millisec=0
     seconds+=1
  }
  else
     millisec+=1
     document.f.f2.value = seconds + "." + millisec;
     timer = setTimeout("display1()",100);
  }

function starttimer1() {
	
  if (timer > 0) {
	return;
  }
  display1();	
}
function stoptimer1() {
  clearTimeout(timer);
  timer = 0;
}

function startstoptimer1() {
  if (timer > 0) {
     clearTimeout(timer);
     timer = 0;
  } else {
     display1();
  }
}


function resettimer1() {
	stoptimer1();
	millisec = 0;
	seconds = 0;
}

function resetAll(){
  All();
  millisec = 0;
	seconds = 0;
}
