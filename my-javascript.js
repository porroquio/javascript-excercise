var myAdjectives = ["big","smart","small","great","intelligent","crazy","curious","smelly","awesome","normal"];
var myNouns = ["car","driver","aunt","cousin","dog","tree","uncle","mom","boss","girl","pet","man","neighbor"];
var myVerbs = ["drove","hit","pushed","ran","screwed","slammed","smashed","destroyed","sent","kicked","kissed","peeled"];
var myPersonalNouns = ["homework","car","laptop","tablet","phone","hand","face","keys","lottery","tongue","boat"];
var myPlaces = ["my home","my college","my bed","my doctor's office","my school","the car dealer","the theater","the garage"];



var elements = [myAdjectives,myNouns,myVerbs,myPersonalNouns,myPlaces];
var selectors = ["adjective","noun","verb","personalNoun","place"];

function clickFunction(){

    for(var i = 0; i <= wordSelectorFromArray.length; i=i+1){
        wordSelectorFromArray(elements[i], selectors[i]);
    }

}


/*
wordSelectorFromArray(myAdjectives,"adjective");
wordSelectorFromArray(myNouns,"noun");
wordSelectorFromArray(myVerbs,"verb");
wordSelectorFromArray(myPersonalNouns,"personalNoun");
wordSelectorFromArray(myPlaces,"place");
*/













//FUNCTIONS
function wordSelectorFromArray(theArray, theId){

    var adjectivesLength = theArray.length;
    var myRandomNumber = Math.floor(Math.random()*(adjectivesLength-1));
    document.getElementById(theId).innerHTML = theArray[myRandomNumber];

}
