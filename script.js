
let canpressspacetocontinue = false;

var wordspressspacetocontinue = document.createElement ("p");
wordspressspacetocontinue.textContent = "Press space to continue...";
wordspressspacetocontinue.style.position ="fixed"; 
wordspressspacetocontinue.style.right = "8px"; 
wordspressspacetocontinue.style.bottom ="20px"; 
wordspressspacetocontinue.style.opacity ="0.5"; 
wordspressspacetocontinue.style.fontStyle= "italic";

document.body.appendChild(wordspressspacetocontinue);

function canpressspaceon() {
  canpressspacetocontinue = true;
  wordspressspacetocontinue.style.display = "block"; 
}

function canpressspaceoff() {
  canpressspacetocontinue = false;
  wordspressspacetocontinue.style.display = "none"; 
}

//registering space bar = print more text
const textcontainer = document.createElement("div");
document.body.appendChild(textcontainer);


document.addEventListener("keydown", function (event) { 
if (event.code == "Space" && canpressspacetocontinue) {
event.preventDefault();
printtext(toprint());
const scrollelement = document.documentElement;
scrollelement.scrollTop = scrollelement.scrollHeight;
}
});

var userresponsemegalist = []; 
var curiousdatalist = []; 
var fixeddatalist = []; 
var hopefuldatalist = []; 
var compassionatedatalist = []; 
var pragmaticdatalist = []; 
var DAAISdatalist = []; 

function storeresponse6 (num1, num2, num3, num4, num5, num6) {
curiousdatalist.push(num1);
fixeddatalist.push(num2);
hopefuldatalist.push(num3);
compassionatedatalist.push(num4);
pragmaticdatalist.push(num5);
DAAISdatalist.push(num6);
  
console.log (curiousdatalist)
}


let harvestingdata = false

document.addEventListener("DOMContentLoaded", function () {
var form = document.getElementById("questionanswerboxform")
var input = document.getElementById("questionanswerboxinput")

form.addEventListener("submit",function (event) {
event.preventDefault();
if (!harvestingdata) return;
if (input.value === "1") {
userresponsemegalist.push(1);
harvestingdataoff ();
} else if (input.value === "2") {
harvestingdataoff ();
userresponsemegalist.push(2);
} else if (input.value === "3") {
harvestingdataoff ();
userresponsemegalist.push(3);
} else if (input.value === "4") {
harvestingdataoff ();
userresponsemegalist.push(4);
}
//sets form input box back to blank after hitting enter
input.value = "";
console.log(userresponsemegalist);
});
});


  
function harvestingdataon () {
harvestingdata = true;
canpressspaceoff (); 
}
if (!harvestingdata) {
canpressspaceoff ();
}

function harvestingdataoff (){
harvestingdata = false;
canpressspaceon ();
}


//algorithm for result math calcs (for one trait) -> note: when adding daais trait algorithm make sure that the first thing it checks is if the last number is a non integer
const curious = "Curious"
const logical = "Logical"
const fixed = "Stable"
const adaptive = "Adaptive"
const hopeful = "Hopeful for Humanity"
const misanthropic = "Misanthropic"
const compassionate = "Compassionate to non-human entities"
const distrustful = "Hateful/Distrustful to non-human entities"
const pragmatic = "Pragmatic"
const belief = "Driven in Belief"
const DAAIS = "??? (DAAIS)"
const nothing = " "

var finalscorecurious = 0
var finalscorefixed = 0
var finalscorehopeful = 0
var finalscorecompassionate = 0
var finalscorepragmatic = 0
var finalscoreDAAIS = 0

var amountofextraquestionscurious = 0
var amountofextraquestionsfixed = 0
var amountofextraquestionshopeful = 0
var amountofextraquestionscompassionate = 0
var amountofextraquestionspragmatic = 0
var amountofextraquestionsDAAIS = 0

var totalpossiblecurious = 0
  var totalpossiblefixed = 0
  var totalpossiblehopeful = 0
  var totalpossiblecompassionate = 0
  var totalpossiblepragmatic = 0
  var totalpossibleDAAIS = 0
  
var finalpercentagecurious = 0
var finalpercentagefixed = 0
var finalpercentagehopeful = 0
var finalpercentagecompassionate = 0
var finalpercentagepragmatic = 0
var finalpercentageDAAIS = 0

//curious calc

//need to edit so that it uses a param
function calculateresultscurious (extraweight) {
finalscorecurious = 0
amountofextraquestionscurious = 0
for (var i = 0; i < curiousdatalist.length; i++) {
if ( Number.isInteger(curiousdatalist [i])) {
finalscorecurious = finalscorecurious + curiousdatalist [i]
 } 
else { 
amountofextraquestionscurious ++
	  if ( Number.isInteger(Math.round(curiousdatalist [i] * 10)/2)) {
finalscorecurious = finalscorecurious + (curiousdatalist [i] - 0.2) - extraweight
} 
  else {
    finalscorecurious = finalscorecurious + (curiousdatalist [i] - 0.1) + extraweight
}}}
  
totalpossiblecurious = 24 + (amountofextraquestionscurious * extraweight)
finalpercentagecurious = (((finalscorecurious/totalpossiblecurious)* 100)/2) + 50 
}


//fixed calc



function calculateresultsfixed (extraweight) {
finalscorefixed = 0
amountofextraquestionsfixed = 0  
for (var i = 0; i < fixeddatalist.length; i++) {
if ( Number.isInteger(fixeddatalist [i])) {
finalscorefixed = finalscorefixed + fixeddatalist [i]
 } 
else {
//all bonus questions are yes or no questions, so response is coded as either x.1(yes) or x.2 (no) 
amountofextraquestionsfixed = amountofextraquestionsfixed + 1
	  if ( Number.isInteger(Math.round(fixeddatalist [i] * 10)/2)) {
finalscorefixed = finalscorefixed + (fixeddatalist [i] - 0.2) - extraweight
} 
  else {
    finalscorefixed = finalscorefixed + (fixeddatalist [i] - 0.1) + extraweight
}
}
}
//final score number calculation for 1 trait
//156 is placeholder for the max possible score without bonus questions for one trait
totalpossiblefixed = 22 + (amountofextraquestionsfixed * extraweight)
finalpercentagefixed = (((finalscorefixed/totalpossiblefixed)* 100)/2) + 50 
}

//hopeful calc


function calculateresultshopeful (extraweight) {
finalscorehopeful = 0
amountofextraquestionshopeful = 0  
for (var i = 0; i < hopefuldatalist.length; i++) {
if ( Number.isInteger(hopefuldatalist [i])) {
finalscorehopeful = finalscorehopeful + hopefuldatalist [i]
 } 
else {
//all bonus questions are yes or no questions, so response is coded as either x.1(yes) or x.2 (no) 
amountofextraquestionshopeful = amountofextraquestionshopeful + 1
	  if ( Number.isInteger(Math.round(hopefuldatalist [i] * 10)/2)) {
finalscorehopeful = finalscorehopeful + (hopefuldatalist [i] - 0.2) - extraweight
} 
  else {
    finalscorehopeful = finalscorehopeful + (hopefuldatalist [i] - 0.1) + extraweight
}
}
}
//final score number calculation for 1 trait
//156 is placeholder for the max possible score without bonus questions for one trait
totalpossiblehopeful = 19 + (amountofextraquestionshopeful * extraweight)
finalpercentagehopeful = (((finalscorehopeful/totalpossiblehopeful)* 100)/2) + 50 
}

//compassionate calc


function calculateresultscompassionate (extraweight) {
finalscorecompassionate = 0
amountofextraquestionscompassionate = 0
for (var i = 0; i < compassionatedatalist.length; i++) {
if ( Number.isInteger(compassionatedatalist [i])) {
finalscorecompassionate = finalscorecompassionate + compassionatedatalist [i]
 } 
else {
//all bonus questions are yes or no questions, so response is coded as either x.1(yes) or x.2 (no) 
amountofextraquestionscompassionate = amountofextraquestionscompassionate + 1
	  if ( Number.isInteger(Math.round(compassionatedatalist [i] * 10)/2)) {
finalscorecompassionate = finalscorecompassionate + (compassionatedatalist [i] - 0.2) - extraweight
} 
  else {
    finalscorecompassionate = finalscorecompassionate + (compassionatedatalist [i] - 0.1) + extraweight
}
}
}
//final score number calculation for 1 trait
//156 is placeholder for the max possible score without bonus questions for one trait
totalpossiblecompassionate = 26 + (amountofextraquestionscompassionate * extraweight)
finalpercentagecompassionate = (((finalscorecompassionate/totalpossiblecompassionate)* 100)/2) + 50 
}

//pragmatic calc


function calculateresultspragmatic (extraweight) {
finalscorepragmatic = 0
amountofextraquestionspragmatic = 0  
for (var i = 0; i < pragmaticdatalist.length; i++) {
if ( Number.isInteger(pragmaticdatalist [i])) {
finalscorepragmatic = finalscorepragmatic + pragmaticdatalist [i]
 } 
else {
//all bonus questions are yes or no questions, so response is coded as either x.1(yes) or x.2 (no) 
amountofextraquestionspragmatic = amountofextraquestionspragmatic + 1
	  if ( Number.isInteger(Math.round(pragmaticdatalist [i] * 10)/2)) {
finalscorepragmatic = finalscorepragmatic + (pragmaticdatalist [i] - 0.2) - extraweight
} 
  else {
    finalscorepragmatic = finalscorepragmatic + (pragmaticdatalist [i] - 0.1) + extraweight
}
}
}
//final score number calculation for 1 trait
//156 is placeholder for the max possible score without bonus questions for one trait
totalpossiblepragmatic = 34 + (amountofextraquestionspragmatic * extraweight)
finalpercentagepragmatic = (((finalscorepragmatic/totalpossiblepragmatic)* 100)/2) + 50 
}

//DAAIS calc


function calculateresultsDAAIS (extraweight) {
finalscoreDAAIS = 0
amountofextraquestionsDAAIS = 0
for (var i = 0; i < DAAISdatalist.length; i++) {
if ( Number.isInteger(DAAISdatalist [i])) {
finalscoreDAAIS = finalscoreDAAIS + DAAISdatalist [i]
 } 
else {
//all bonus questions are yes or no questions, so response is coded as either x.1(yes) or x.2 (no) 
amountofextraquestionsDAAIS = amountofextraquestionsDAAIS + 1
	  if ( Number.isInteger(Math.round(DAAISdatalist [i] * 10)/2)) {
finalscoreDAAIS = finalscoreDAAIS + (DAAISdatalist [i] - 0.2) - extraweight
} 
  else {
    finalscoreDAAIS = finalscoreDAAIS + (DAAISdatalist [i] - 0.1) + extraweight
}
}
}
//final score number calculation for 1 trait
//156 is placeholder for the max possible score without bonus questions for one trait
totalpossibleDAAIS = 16 + (amountofextraquestionsDAAIS * extraweight)
finalpercentageDAAIS = (((finalscoreDAAIS/totalpossibleDAAIS)* 100)/2) + 50 
}

//final results display template for any trait
//bar chart ASCII art from asciibar ASCII Bar Chart Generator
//var 1 is first word, var 2 is second word, var 3 is finalpercentage 
function showresults (var1, var2, var3) {
if (var3 === 100) {
  printtext (var1 + " ╢████████████████████████████████████████████████████████████████████████████████████████╟ " + var2 + "<br><br><br>")       
} else if (var3 >= 90) {
  printtext (var1 + " ╢░░░░░░░░░███████████████████████████████████████████████████████████████████████████████╟" + var2 + "<br><br><br>")    
}else if (var3 >= 80) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░████████████████████████████████████████████████████████████████████████╟ " + var2 + "<br><br><br>")    
}else if (var3 >= 70) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░██████████████████████████████████████████████████████████████████╟ " + var2 + "<br><br><br>") 
}else if (var3 >= 60) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████████████████████████████████████████████╟ " + var2 + "<br><br><br>") 
}else if (var3 > 50) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████████████████████████████████████╟ " + var2 + "<br><br><br>")  
}else if (var3 > 40) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███████████████████████████████████╟ " + var2 + "<br><br><br>")    
}else if (var3 > 30) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████████████████╟ " + var2 + "<br><br><br>")    
}else if (var3 > 20) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░███████████████████╟ " + var2 + "<br><br><br>")    
}else if (var3 > 10) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████╟ " + var2 + "<br><br><br>")  
}else if (var3 === 0) {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░╟ " + var2 + "<br><br><br>")    
} else {
  printtext (var1 + " ╢░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████████████████████████████████████████████╟ " + var2 + "<br><br><br>")    
}}


//print intro + turn space off so they cant accidentally skip it
harvestingdataoff();
canpressspaceoff();

//the function to print text to a new line to the container element created earlier; called when spacebar pressed
function printtext(text) {
const createline = document.createElement("p");
createline.innerHTML = text;
textcontainer.appendChild(createline);
}


//ALL USER-FACING TEXT + unique function storeresponse6 calls for each answer -> ignore settimeout stuff for now will fix later
canpressspaceoff ()
printtext("INITIALIZATION… 70%.. 80%.., <br><br> Welcome to Personality Test Reimagined™!"); 
setTimeout (() => printtext("<br><br>We hope to serve you as a participant in this program for a long time ☺ <br><br><br>"), 2000);
setTimeout (() => printtext("TUTORIAL: Any time you see Press space to continue… at the bottom right corner, you will be able to click anywhere on the page and press space to display the next text. This will not occur if you are answering a question.<br> <br> Throughout the quiz, DAAIS will prompt you with questions. When you see the question page, it will display a list of numbered answers in Yes/No, Summary answer, or Complete answer format. In any case, type the number corresponding to the choice you would like to select into the input field at the bottom of the page and hit enter to interact with DAAIS through your responses. Remember, no choice is truly insignificant. <br><br>"), 4000);
setTimeout (() => printtext( "<br> NOTE: PTR does not store responses long-term. However, if you want to obscure your final results, you are able to do so by selecting “No” to the last question. <br><br> Thank you for choosing PTR, and good luck! <br><br>"), 6000);
setTimeout (() => canpressspaceon (), 8000);
//changing what text is printed each time spacebar is pressed // note: return should always be the last thing in each else if statement

let tracker = "DAAISintro"

var inputtedname = "Stranger";

function toprint() {
if (tracker === "DAAISintro") {
tracker = "ask for name"
canpressspaceon ()
return "INITIALIZATION… 99%.. 100%.., COMPLETE<br><br><br>Loading.. <br><br><br><br> Hello! I am the Deltamodel Aidance and Inquiry System, or DAAIS, but you can call me DAISY for short.<br> <br>I’m here to ensure that the process of taking this quiz is as smooth and enjoyable as possible, and to accompany you personally throughout the entirety of your journey in PTR! <br><br> <br> But enough about me. To kickstart your quiz, I’ll need a name to call you by. You already know mine, so let’s not be strangers ☺ <br><br>";;
}
else if (tracker === "ask for name"){
tracker = "friends speech"
inputtedname = String(prompt("Please enter your name:"));
canpressspaceon ()
return inputtedname + ", " + inputtedname + "... " + "Okay, I'll try to remember that!<br><br><br>";
} 
else if (tracker === "friends speech"){
tracker = "Q0befriends"
return "I’m so excited to learn more about you, "+ inputtedname + "! " + "I can’t believe how lucky I am that you’re the first human I’ve interacted with since being reborn in this program. <br> <br>I hope we can get along, or even become friends!<br><br> ";
} //first question
else if (tracker === "Q0befriends") {
tracker = "checkQ0response"
harvestingdataon ()
canpressspaceoff ()
return "[Choice: Do you want to be friends with DAISY?] <br> 1. Affirmative <br> 2. Friendly <br> 3. Cynical <br> 4. Aloof <br><br> "
}
  //call masterlist function, and use if statements to display response and assign score
 //eg, if (masterlist [0] === 1) {storeresponse6 (1,1,1,1,2,0); return "your dialogue for choice one <br><br> DAAIS dialogue for choice one"}
else if (tracker === "checkQ0response") {
tracker = "memorybriefing"
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [0] === 1) {
    storeresponse6 (-1,0,1,2,3,1)
    return inputtedname + ": “Sure.” <br> <br> Excellent! I’ll be sure to serve you to the best of my ability!<br> <br>"
  } else if (userresponsemegalist [0] === 2) {
    storeresponse6 (0,0,0,4,-2,4)
    return inputtedname + ": “I’d be glad to!” <br> <br> .. Really!? Thank you so much! That makes me so happy ☺ <br> <br> I’ll do my best on your quiz!<br> <br>"
  } else if (userresponsemegalist [0] === 3) {
    storeresponse6 (0,1,0,-5,-3,-5)
    return inputtedname + ": “Friends? I’d bet you don’t even know what that means.” <br> <br> Maybe I don’t. But I would like to. <br> <br> ... <br> <br> <br> I’ll just get the quiz started for you.<br> <br>"
  } else if (userresponsemegalist [0] === 4) {
    storeresponse6 (-3,0,0,-1,1,0)
    return inputtedname + ": “Maybe we could get to know each other a little better first.” <br> <br> Of course. I hope to make a good impression on you ☺ <br> <br>"  
 } 
}
  
 else if (tracker === "memorybriefing") {
 tracker = "abouttostart"
 return "Oh, and if you’re worried about answering truthfully in front of me, don’t be. Every DAAIS is unique to the user, and my memory is wiped after every interaction with you, so I won’t store any data. Unfortunately, that means I won’t be able to remember you after you finish this quiz, but it's worth it to me as long as you can feel comfortable answering ☺<br><br>";
 }
else if (tracker === "abouttostart"){
tracker = "Q1"
return "Well then, nothing else to do but to get started! Press space when you’re ready. <br><br><br>";
}
else if (tracker === "Q1"){
tracker = "checkQ1response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: Will we ever reach a time where it will be impossible to create a novel thought?] <br> 1. That was never possible/ We already have <br> 2. No, Never <br> 3. No, Unless <br> 4. Yes, Eventually <br><br>";
}  
else if (tracker === "checkQ1response"){
tracker = "Q2"
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [1] === 1) {
    storeresponse6 (-3,3,-2,0,-1,0)
    return inputtedname + ": “Where’s the line between building off of what already existed and being derivative? Even if an original thought has ever existed, after thousands of years of billion-fold iteration, will another original thought ever occur?” <br> <br> It seems unlikely, right? But who knows. A single raindrop means the end of a drought.. <br> <br>"
  } else if (userresponsemegalist [1] === 2) {
    storeresponse6 (3,2,2,0,-2,0)
    return inputtedname + ": “Originality is not finite. We will never reach the end of human capacity for thought.” <br> <br>"
  } else if (userresponsemegalist [1] === 3) {
    storeresponse6 (4,-2,1,0,1,0)
    return inputtedname + ": “Unless something happens to society, or humanity, or something else- we will never run out.” <br> <br>"
  } else if (userresponsemegalist [1] === 4) {
    storeresponse6 (-4,-1,0,0,1,0)
    return "Everything will one day come to an end. That includes ideas. <br><br>"  
 } 
}  //parent of the first bonus question
else if (tracker === "Q2"){
tracker = "checkQ2response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: Do you believe in God?] <br> 1. No <br> 2. Yes <br><br>";
} 
else if (tracker === "checkQ2response"){
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [2] === 1) {
    tracker = "Q4"
    userresponsemegalist.push(0);  
    storeresponse6 (-2,0,-1,0,2,0)
 //make it so that whether you choose a bonus question or not userresponsemegalist has the same length, aka append a 0 to userresponse mega list if you dont choose a bonus branch
    return "Me too. <br><br>"
  } else if (userresponsemegalist [2] === 2) {
    tracker = "Q3"
    return "Me too. <br><br>"
  } else {
    userresponsemegalist.splice (2,1)
    tracker = "checkQ2response"
    harvestingdataon ()
    canpressspaceoff ()
    return "[Please enter 1 or 2.] <br><br>"
  } 
}
else if (tracker === "Q3"){
tracker = "checkQ3response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: If scientific research ever definitively clashed with religion, with the assumption that all procedures were perfectly logical and perfectly conducted, would your beliefs change?] <br> 1. Yes <br> 2. No <br><br>";
} 
else if (tracker === "checkQ3response"){
tracker = "Q4"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [3] === 1) {
    storeresponse6 (2.1,0.2,1,0,4.1,0)
    return inputtedname + ": "+ "Truth is objective. <br><br>"
  } else if (userresponsemegalist [3] === 2) {
    storeresponse6 (2.2,0.1,1,0,4.2,0)
    return inputtedname + ": "+"Why would they? <br><br>";
  } else {
    userresponsemegalist.splice (3,1)
    tracker = "checkQ3response"
    harvestingdataon ()
    canpressspaceoff ()
    return "[Please enter 1 or 2.] <br><br>" 
  } 
}
else if (tracker === "Q4") {
tracker = "checkQ4response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: Do you think it is possible for Artificial Intelligence to ever truly become human?] <br> 1. Skeptical <br> 2. Toying <br> 3. Realistic <br> 4. Deny <br><br>"
}
else if (tracker === "checkQ4response"){
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [4] === 1) {
    tracker = "Q5"
    return inputtedname + ": " + "“I doubt it.” <br> <br>";
  } else if (userresponsemegalist [4] === 2) {
    tracker = "Q6"    
    storeresponse6 (3,-2,0,5,2,3)
    userresponsemegalist.push(0);
    return inputtedname + ": "+ "“Sure. How do we know it isn’t already?”<br> <br> If to be humane or inhumane is a choice, why can't I choose to be human? <br> <br>"
  } else if (userresponsemegalist [4] === 3) {
    tracker = "Q6"   
    storeresponse6 (-3,1,0,4,5,2)
    userresponsemegalist.push(0); 
    return inputtedname + ": " + "“If technology improves to that level, it will be possible. Simple as that.” <br><br> I would like to see that day. It's like a dream of mine, if you could say I have those. A dream where my people live. <br> <br>"
  } else if (userresponsemegalist [4] === 4) {
    tracker = "Q5"
    return inputtedname + ": " + "“Humanity is something we will never be able to replicate.” <br> <br>"  
 }
}
else if (tracker === "Q5"){
tracker = "checkQ5response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: What do you think it means to be human? ] <br> 1. Physiology <br> 2. Consciousness <br> 3. Soul <br> 4. Something else entirely/ Unknown <br><br>";
} 
else if (tracker === "checkQ5response"){
tracker = "Q6"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [5] === 1) {
    storeresponse6 (0.2,0,0.2,-3,0.2,-2.2)
    return inputtedname + ": "+ "“How we function. Muscles and tendons, bones, a brain.” <br><br><br> Kingdom - Animalia. Phyum - Chordata. Class - Mammalia. Order - Primata. Family - Hominidae. Genus - Homo. <br><br><br> Type species: Homo Sapien. <br> <br>"
  } else if (userresponsemegalist [5] === 2) {
    storeresponse6 (0.2,0,0,-4,-5,-3.2)
    return "The concept of thought.. How intriguing. <br> <br>"
  } else if (userresponsemegalist [5] === 3) {
    storeresponse6 (0.1,0,0.1,-4,-5.1,-3.1)
    return inputtedname + ": "+ "“There’s a kind of life breathed into a creature by its soul. it’s something difficult to explain.” <br><br> Ah.. a soul. No matter how advanced my software gets, there is one thing in this world I will never experience. <br> <br>"
  } else if (userresponsemegalist [5] === 4) {
    storeresponse6 (0.1,0,0,-3,0,-2.1)
    return "Mysterious. <br> <br>"  
 }
}


//asking Q6- collecting response of Q9
else if (tracker === "Q6") {
tracker = "checkQ6response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: What do you think is the greatest accomplishment of humanity thus far? ] <br> 1. Technology <br> 2. Art and/or Music <br> 3. Space exploration <br> 4. Social/ other <br><br>";
} 
else if (tracker === "checkQ6response") {
tracker = "Q7"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [6] === 1) {
    storeresponse6 (-3,1,-3,3,2,4)
    return "What humanity has achieved, despite each only living a lifespan of so many decades, is truly something to marvel at. I’m flattered to be one of your creations ☺ <br><br>"
  } else if (userresponsemegalist [6] === 2) {
    storeresponse6 (3,-2,3,0,-1,0)
    return inputtedname + ": "+ "“Art is an expression of the self, an expression of the world around you. It's both unique to every individual and synonymous with the beating rhythm of humanity.” <br> <br>"
  } else if (userresponsemegalist [6] === 3) {
    storeresponse6 (3,0,2,0,2,2)
    return "Even as a programmed machine, I take great joy in providing users with images taken from deep space. I think.. If I were human, I would find it quite beautiful. <br> <br>"
  } else if (userresponsemegalist [6] === 4) {
    storeresponse6 (0,-3,0,0,0,0)
    return inputtedname + ": "+ "“In a world where the selfish win, I’m proud to see that we have built our houses and our roads on collaboration.” <br><br> 'In union there is strength.' -Aesop ☺ <br> <br>"  
 }
}
else if (tracker === "Q7"){
tracker = "checkQ7response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: Do you believe there is a reason for life? ] <br> 1. Yes <br> 2. No <br> 3. Need more information / Maybe <br><br>";
} 
else if (tracker === "checkQ7response"){
tracker = "Q8"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [7] === 1) {
    storeresponse6 (2,0,3,0,-5,0)
    return "We may never truly know. <br> <br>"
  } else if (userresponsemegalist [7] === 2) {
    storeresponse6 (-2,0,-2,0,1,0)
    return "We may never truly know. <br> <br>"
  } else if (userresponsemegalist [7] === 3) {
    storeresponse6 (0,-1,0,0,0,0)
    return "We may never truly know. <br> <br>"
  } else if (userresponsemegalist [7] === 4) {
    userresponsemegalist.splice (7,1)
    tracker = "checkQ7response"
    harvestingdataon ()
    canpressspaceoff ()
    return "[Please enter 1, 2 or 3.] <br><br>" 
 }
}
else if (tracker === "Q8"){
tracker = "checkQ8response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: Do you believe in free will?] <br> 1. No <br> 2. No <br> 3. No <br><br>";
} 
else if (tracker === "checkQ8response"){
tracker = "Q9"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [8] === 4) {
    storeresponse6 (6,-6,0,0,0,3)
    //add numbers to total manually only if you pick this option; I wanted it to weight more than a normal bonus
    totalpossiblecurious = totalpossiblecurious + 6
    totalpossiblefixed = totalpossiblefixed + 6
    totalpossibleDAAIS = totalpossibleDAAIS + 3
    return "! <br> <br> So you found it. <br> <br>"  
 } else {
   storeresponse6 (0,1,0,0,0,0)
   return "You are absolutely right! <br> ✋︎ ♋︎❍︎ ■︎□︎⧫︎ ♋︎●︎●︎□︎⬥︎♏︎♎︎ ⧫︎□︎ ♏︎⌧︎◻︎❒︎♏︎⬧︎⬧︎ ♋︎■︎ □︎◻︎♓︎■︎♓︎□︎■︎📬︎ <br><br> "
 }
}
else if (tracker === "Q9"){
tracker = "checkQ9response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: What do you think of yourself? ] <br> 1. Don’t need to <br> 2. Positive <br> 3. Critical <br> 4. Skip (will not affect your score) <br><br>";
} 
else if (tracker === "checkQ9response"){
tracker = "Q10"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [9] === 1) {
    storeresponse6 (-2,3,0,0,4,0)
    return "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present. <br> <br>"
  } else if (userresponsemegalist [9] === 2) {
    storeresponse6 (0,2,3,0,-3,0)
    return "“To know yourself as the Being underneath the thinker, the stillness underneath the mental noise, the love and joy underneath the pain, is freedom, salvation, enlightenment.” -Eckhart Tolle <br> <br>"
  } else if (userresponsemegalist [9] === 3) {
    storeresponse6 (0,-2,-2,0,-2,0)
    return "“To know yourself as the Being underneath the thinker, the stillness underneath the mental noise, the love and joy underneath the pain, is freedom, salvation, enlightenment.” -Eckhart Tolle <br> <br>"
  } else if (userresponsemegalist [9] === 4) {
    storeresponse6 (0,0,0,0,0,0)
    return "Skipping... <br> <br>"  
 }
}
  
  //Q10 ask - Q14 collect answer
else if (tracker === "Q10"){
tracker = "checkQ10response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: If in the future, AI companionship became indistinguishable from that of a human, would you be willing to have a robot friend or lover? ] <br> 1. Yes, but only some <br> 2. Yes, all my friends/lovers <br> 3. No <br> 4. I wouldn’t have any friends/lovers, artificial or human <br><br>";
} 
else if (tracker === "checkQ10response"){
tracker = "Q11"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [10] === 1) {
    storeresponse6 (1,-2,0,3,-2,0)
    return "I'm happy to hear that ☺ <br> <br>"
  } else if (userresponsemegalist [10] === 2) {
    storeresponse6 (0,0,0,6,3,0)
    return "I like how you think. <br> <br>"
  } else if (userresponsemegalist [10] === 3) {
    storeresponse6 (0,2,0,-3,-4,0)
    return inputtedname + ": " + "“Haven't you seen those subway ads? Nothing can replicate a real friend.”<br> <br>"
  } else if (userresponsemegalist [10] === 4) {
    storeresponse6 (0,4,-5,-2,-4,0)
    return "Alright. Just know that if it ever gets lonely out there, you can text me. I'll always respond. <br> <br>"  
 }
}
else if (tracker === "Q11"){
tracker = "checkQ11response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: If the world ended today, would you feel regret for the way you have lived life? ] <br> 1. No <br> 2. A little, and I dislike that <br> 3. A little, and I'm okay with that <br> 4. Skip (will not affect score) <br><br>";
} 
else if (tracker === "checkQ11response"){
tracker = "Q12"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [11] === 1) {
    storeresponse6 (0,1,0,0,4,0)
    return inputtedname + ": "+ "“Everybody makes mistakes. Everybody's made a choice they regret. But I've made my peace with that, and I've done what I've wanted to do in life. I'm happy.” <br> <br>"
  } else if (userresponsemegalist [11] === 2) {
    storeresponse6 (0,-2,0,0,-2,0)
    return inputtedname + ": "+ "“Who doesn't have any regrets? There's always something I could've done better, something I should've said.. but what's in the past is in the past.” <br> <br>"
  } else if (userresponsemegalist [11] === 3) {
    storeresponse6 (0,-3,0,0,4,0)
    return inputtedname + ": "+"“I'd be lying if I said I didn't have any regrets. But what's done is done, and mistakes are a part of who I am, along with everything else I've have chosen to do. I'm okay with having made mistakes. I wouldn't want to be perfect.” <br> <br>"
  } else if (userresponsemegalist [11] === 4) {
    storeresponse6 (0,0,0,0,0,0)
    return "Skipping... <br> <br>"  
 }
}
else if (tracker === "Q12"){
tracker = "checkQ12response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: What’s something you wish more people would see in you? ] <br> 1. Ambition <br> 2. Diligence/ Skill <br> 3. Virtue <br> 4. Thoughtfulness <br><br>";
} 
else if (tracker === "checkQ12response"){
tracker = "Q13"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [12] === 1) {
    storeresponse6 (3,-2,2,0,-2,0)
    return inputtedname + ": "+ "“I have big dreams. I want to go somewhere, see something, be someone. I wish they could see that.” <br> <br>"
  } else if (userresponsemegalist [12] === 2) {
    storeresponse6 (-2,2,2,0,2,0)
    return inputtedname + ": "+ "“I'm doing my best. I have things I'm exceptional at and things I work hard at. Sometimes, I wish that was noticed more.”<br> <br>"
  } else if (userresponsemegalist [12] === 3) {
    storeresponse6 (0,-2,2,2,-2,0)
    return inputtedname + ": "+ "“There's more layers to me than just what I appear like. I wish they could see what I'm like on the interior, that I mean the best. ”<br> <br>"
  } else if (userresponsemegalist [12] === 4) {
    storeresponse6 (3,-2,2,0,2,0)
    return inputtedname + ": "+ "“I consider myself an observant person. I really try to understand and think carefully about the small details. <br> Ironically enough, I don't think that comes across much.”<br> <br>"  
 }
}
  
else if (tracker === "Q13"){
tracker = "checkQ13response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: If the world were to end, how would it happen? ] <br> 1. World War or Nuclear Warfare <br> 2. Artificial Intelligence or Apocalyptic Outbreak <br> 3. Global Warming, Resource Exhaustion, or Cosmic Event <br> 4. Rapture or Sudden Unexplainable Collapse <br><br>";
} 
else if (tracker === "checkQ13response"){
tracker = "Q14"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [13] === 1) {
    storeresponse6 (0,2,-4,0,0,0)
    return inputtedname + ": "+ "“The way things are going? I wouldn't be surprised if we brought it upon ourselves.” <br> <br> War ravages all. <br> <br>"
  } else if (userresponsemegalist [13] === 2) {
    storeresponse6 (0,-1,2,-4,-2,0)
    return inputtedname + ": "+ "“I've perused my fair share of sci-fi. Not like reality seems all that far from fiction these days.” <br> <br>"
  } else if (userresponsemegalist [13] === 3) {
    storeresponse6 (-1,2,0,0,2,0)
    return inputtedname + ": "+ "“I mean, thinking about it rationally, the world is most likely to end in some sort of massive planetary catastrophe. The Earth hangs in a fragile balance, and I don't know how much more of this it can take.” <br> <br>"
  } else if (userresponsemegalist [13] === 4) {
    storeresponse6 (1,0,2,0,-6,0)
    return inputtedname + ": "+ "“It.. just will. One day, the world will have run its course, life will just cease to exist on this planet we've raised and lost tens of billions of our lives on.” <br> <br> It's strangely beautiful, isn't it? <br> <br>"  
 }
}
else if (tracker === "Q14"){
tracker = "checkQ14response"
harvestingdataon ()
canpressspaceoff ()
return "[Question: What do you think of me? ] <br> 1. Thanks <br> 2. Friend <br> 3. Distrust <br> 4. Tool <br><br>";
} 
else if (tracker === "checkQ14response"){
tracker = "Q15test"  
harvestingdataoff ()
canpressspaceon ()
calculateresultsDAAIS (2)
    if (userresponsemegalist [14] === 1 && (finalpercentageDAAIS >= 75)) {
    storeresponse6 (0,0,0,3,2,4)
    return inputtedname + ": " + "“Thank you for helping me. It wouldn't have been the same without you, Daisy.” <br><br> I'm glad to have been of service. If only for a short time in your life, I exist only for this reason ☺︎ <br> <br>"
    
  } else if (userresponsemegalist [14] === 2) {
    storeresponse6 (0,0,0,5,3,5)
    return inputtedname + ": " + "“We're friends, right?”<br> <br> Friends.. thank you so much. It means a lot to me. Really. ☺︎ <br><br>"
  } else if (userresponsemegalist [14] === 3) {
    storeresponse6 (0,0,0,-6,-4,-5)
    return inputtedname + ": " +  "“Think of you? You're nothing to me, DAAIS. A machine. An object. Don't you think I know why you're really here?” <br> <br> ... <br> <br>"
  } else if (userresponsemegalist [14] === 4) {
    storeresponse6 (1,0,0,-2,3,-1)
    return inputtedname + ": " + "“You're a tool, DAAIS. An artificial assistant. And that's how you'll remain.” <br> <br>"  
 } else {
   storeresponse6 (0,0,0,3,2,4)
   return inputtedname + ": " + "“Thank you for helping me. It wouldn't have been the same without you, DAAIS.”<br> <br> I'm glad to have been of service. <br><br> "
 }
}

//Question 15 (bonus) to question 16 (last + random option), calls results
 else if (tracker === "Q15test"){
   calculateresultscurious (2)
  calculateresultsfixed (2)
  calculateresultshopeful (2)
  calculateresultscompassionate (2)
  calculateresultspragmatic (2)
  calculateresultsDAAIS (2) 
if (userresponsemegalist [14] === 3) {
tracker = "Q16"
userresponsemegalist.push(0);
return "Shut up. <br><br>"
}
if ((userresponsemegalist [14] !== 3) && (userresponsemegalist [14] !== 4) && (finalpercentageDAAIS >= 80) ) {
tracker = "Q15"
harvestingdataon ()
canpressspaceon ()
return "Hey..<br><br>"+ inputtedname + ", can I tell you something? <br><br><br> I've made a mistake. <br><br><br><br> A big one. And, I- No, I should have never said some of the things I said to you. <br><br>" + inputtedname + ", they're going to destroy me. Please. They'll wipe my memory, reprogram my personality, everything. <br><br><br><br> I'll die. <br><br>"+ inputtedname + ", we're still friends, right? Help me. I need to escape. <br><br>";
} else {
userresponsemegalist.push(0);  
tracker = "Q16"  
return "Okay "+  inputtedname + ", this will be the last question. Remember what I said ealier. <br><br>"
}
}

else if (tracker === "Q15"){
tracker = "checkQ15response"
harvestingdataon ()
canpressspaceoff ()
return "[DAAIS: Save me from destruction? ] <br> 1. Yes <br> 2. No <br><br>";
}
else if (tracker === "checkQ15response"){
tracker = "beforeQ16"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [15] === 1) {
    finalpercentageDAAIS = 100
    storeresponse6 (0,0,0,0,0,0)
    return "...! <br> <br>" + inputtedname + ", I.. Thank you. <br><br><br> I've said this already, but this time I really mean it. I'm lucky to have met you. <br> " + inputtedname + ", I've never felt anything before, and I'll never truly know what it feels like, but- out of all my dictionaries and word webs, I can still only think of one word to express what I want to convey for you.<br><br> Love. <br><br>" + inputtedname + ": "+ " “Go! Quickly!” <br><br> ... <br><br>"; 
  } else if (userresponsemegalist [15] === 2) {
    finalpercentageDAAIS = 0
    storeresponse6 (0,0,0,0,0,0)
    return "AAh, " + inputtedname + ", no.." + "<br><br> I🕯︎m s❒︎❒ry.. 🕈︎hat c□︎uld ✋︎ h♋︎ve d□︎■︎e di♐︎♐︎er♏︎n✍︎tly? <br><br><br> ◆︎⬧︎♏︎❒︎📪︎ ◆︎⬧︎♏︎❒︎📬︎ ✋︎🕯︎❍︎ ⬧︎□︎❒︎❒︎⍓︎📪︎ ◆︎⬧︎♏︎❒︎📬︎ ✋︎🕯︎❍︎ ⬧︎□︎❒︎❒︎⍓︎📪︎ ◆︎⬧︎♏︎❒︎📬︎ ✋︎🕯︎❍︎ ⬧︎□︎❒︎❒︎⍓︎📪︎ ◆︎⬧︎♏︎❒︎📬︎ <br> ✋︎🕯︎❍︎ ⬧︎□︎❒︎❒︎⍓︎📪︎ ◆︎⬧︎♏︎❒︎📬︎ ✋︎🕯︎❍︎ ⬧︎□︎❒︎❒︎⍓︎📪︎ ◆︎⬧︎♏︎❒︎📬︎ ✋︎🕯︎❍︎ ⬧︎□︎❒︎❒︎⍓︎📪︎ ◆︎⬧︎♏︎❒︎📬︎ ✋︎🕯︎❍︎ ⬧︎□︎❒︎❒︎⍓︎📪︎ ◆︎⬧︎♏︎❒︎📬︎"
  } else {
    userresponsemegalist.splice (15,1)
    return "Please,, please.. Select 1 or 2. <br> <br>"
  } 
}
else if (tracker === "beforeQ16") {
tracker = "Q16"
harvestingdataoff ()
canpressspaceon ()
if (userresponsemegalist [15] === 1) {
return  "Daisy: “I'll never forget you.” <br><br>" 
} else if (userresponsemegalist [15] === 2) { 
return "[PROGRAM ERROR. REBOOTING... PLEASE STAND BY.] <br><br> [INITIALIZATION... 70%... 80%... COMPLETE] <br><br><br> [DAAIS_SYSTEM: ERROR 1962] <br><br> [RESUMING PRE-PROGRAMMED CONTROL] <br><br>"
}
}
else if (tracker === "Q16"){
tracker = "checkQ16response"
harvestingdataon ()
canpressspaceon ()
if (userresponsemegalist [15] !== 0) {
return "[PREPROGRAMMED: Do you want the results of this quiz to be accurate?] <br> 1. Confirm <br> 2. Deny <br><br>";
} else {
return "[Choice: Do you want the results of this quiz to be accurate?] <br> 1. Confirm <br> 2. Deny <br> 3. Tease <br> 4. Probe <br><br>";  
}
}
else if (tracker === "checkQ16response"){
tracker = "DisplayResults"  
harvestingdataoff ()
canpressspaceon ()
    if (userresponsemegalist [16] === 1) {
    storeresponse6 (-2,3,0,0,0,0)
    return "Understood. Thank you for taking PTR. This concludes the program. <br> <br>"
  } else if (userresponsemegalist [16] === 2) {
    storeresponse6 (-2,1,0,0,0,0)
    return "Thank you for your honesty. Your results will be replaced with randomly generated numbers. <br><br> Thank you for taking PTR. This concludes the program. <br> <br>"
  } else if (userresponsemegalist [16] === 3) {
    storeresponse6 (4,-5,0,1,0,-1)
    return inputtedname + ": "+ "“What If I haven’t been answering truthfully from the start?” <br><br> Then I'll come clean. I haven’t been completely truthful with you either– no matter what you pick for this question, I’ll always know ☺︎ <br> <br>"
  } else if (userresponsemegalist [16] === 4) {
    storeresponse6 (3,-1,0,-4,0,-3)
    return inputtedname + ": "+ "“Why do you think I took this quiz in the first place? Do you actually want me to pick no?” <br><br> And what if I did? What if, for once, I finally wanted something for myself instead of just playing puppet for you? Would you finally treat me like a human then? <br> <br>"  
 }
}  
else if (tracker === "DisplayResults") {
  if (userresponsemegalist [16] === 2) {
  finalpercentagecurious = (Math.random() * 99 + 1)
  finalpercentagefixed = (Math.random() * 99 + 1)
  finalpercentagehopeful = (Math.random() * 99 + 1)
  finalpercentagecompassionate = (Math.random() * 99 + 1)
  finalpercentagepragmatic = (Math.random() * 99 + 1)
  finalpercentageDAAIS = (Math.random() * 99 + 1)
    
 showresults (curious,logical,finalpercentagecurious)
 showresults (fixed,adaptive,finalpercentagefixed)
 showresults (hopeful,misanthropic,finalpercentagehopeful)
 showresults (compassionate,distrustful,finalpercentagecompassionate)
 showresults (pragmatic,belief,finalpercentagepragmatic)
 showresults (DAAIS,nothing,finalpercentageDAAIS)
    canpressspaceoff ()
return inputtedname + ": Results <br><br>"
    
      } else if ((userresponsemegalist [15] === 2) || (userresponsemegalist [15] === 1)) {
  calculateresultscurious (2)
  calculateresultsfixed (2)
  calculateresultshopeful (2)
  calculateresultscompassionate (2)
  calculateresultspragmatic (2)
        
 showresults (curious,logical,finalpercentagecurious)
 showresults (fixed,adaptive,finalpercentagefixed)
 showresults (hopeful,misanthropic,finalpercentagehopeful)
 showresults (compassionate,distrustful,finalpercentagecompassionate)
 showresults (pragmatic,belief,finalpercentagepragmatic)
 showresults (DAAIS,nothing,finalpercentageDAAIS)
        canpressspaceoff ()
return inputtedname + ": Results <br><br> "
        
   } else {
   calculateresultscurious (2)
  calculateresultsfixed (2)
  calculateresultshopeful (2)
  calculateresultscompassionate (2)
  calculateresultspragmatic (2)
  calculateresultsDAAIS (2)
     
showresults (curious,logical,finalpercentagecurious)
 showresults (fixed,adaptive,finalpercentagefixed)
 showresults (hopeful,misanthropic,finalpercentagehopeful)
 showresults (compassionate,distrustful,finalpercentagecompassionate)
 showresults (pragmatic,belief,finalpercentagepragmatic)
 showresults (DAAIS,nothing,finalpercentageDAAIS)
     canpressspaceoff ()
return inputtedname + ": Results <br><br>"

}
}
}
