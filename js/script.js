// classname
function cName(){
	document.getElementsByClassName('p')[1].innerHTML="world"
}
// showDate
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}

// textchange
function textChange(){
	document.getElementById('t_h3').innerHTML="Hello";
}
// bulb on/off
function bulbOn(){
	document.getElementById('img').src="images/on.gif";
}
function bulbOff(){
	document.getElementById('img').src="images/off.gif";
};
// show border
function showBorder(){
	document.getElementById('sb').style.border="3px solid blue"
};
// show/hide text
function showText(){
	document.getElementById('sht').style.display="block"
};
function hideText(){
	document.getElementById('sht').style.display="none"
};
// show result
  let num1,num2;
    num1=5;
    num2=3;
     num1+=num2;
  function showResult(){
  	document.getElementById('result').innerHTML=num1;
  };
  // show length
  function lName(){
  	var data=document.getElementsByTagName('h1');
  	   alert(data.length);
  };
  // happy sad emo
  function happyEmo(){
	document.getElementById('emo').src="images/happy.jpg";
};
function sadEmo(){
	document.getElementById('emo').src="images/sad.jpg";
};
// show multiply
let num3,num4;
    num3=4;
    num4=7;
     num3*=num4;
  function seeMulti(){
  	document.getElementById('s_multi').innerHTML=num3;
  };
  // change font color
  function changeColor(){
  	document.getElementById('cfz').style.color="red";
  };
  // Show Fullname
  let firstName="Samiya";
  let lastName="Amin";
  let fullName=firstName +" "+ lastName;
  function showName(){
  	document.getElementById('fullname').innerHTMl=fullName;
  };
  // text align
  function changeAlign(){
  	document.getElementById('changealign').style.textAlign="center";
  }
  // show sub
  let num5,num6;
    num5=68;
    num6=23;
     num5-=num6;
  function seeSub(){
  	document.getElementById('s_sub').innerHTML=num5;
  };
  // change bgcolor
  function changeBg(){
  	document.getElementById('cbg').style.backgroundColor="red";
  };
  // change font size
  function changeSize(){
  	document.getElementById('cfs').style.fontSize="35px";
  };
  // change font style
  function changeStyle(){
    document.getElementById('cfstyle').style.fontFamily="cursive";
  };
  // hide img
  function hideImg(){
  document.getElementById('hide').style.display="none";
};