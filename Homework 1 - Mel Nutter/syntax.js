/**
 * Created by mnutter on 1/25/14.
 */
"use strict";

//Add two numeric values
function addEM(x,y){

        //Check Parameters
        if (typeof(x) != 'number' )
        {
            alert('Error: Numbers only for parameter x.  ' + typeof(x) + ' ' + x + ' was passed to addEM');
        }

        if (typeof(y) != 'number')
         {
             alert('Error: Numbers only for parameter y.  ' + typeof(y) + ' ' + y + ' was passed to addEM');
         }

        //Add the parameters
        alert (x + y);

}

//Return the largest of three values
//Values could be any type
function bigThree(a,b,c){
    var largestValue;

    if (a > b){
        largestValue = a;
    }
    else {
        largestValue = b;
    }

    if (c > largestValue){
        largestValue = c;
    }

    return largestValue;

}

//Swap first items in arrays
function arraySwap(array1, array2){

    var array1_first_element;
    var array2_first_element;

    //Check Parameters
    if (typeof(array1) == 'object' )
    {
        if (array1.length ==0){
            alert('Error: array1 does not have entries');
        }
    }
    else
    {
        alert('Error: array1 is not an array');
    }

    if (typeof(array2) == 'object' )
    {
        if (array2.length ==0){
            alert('Error: array2 does not have entries');
        }
    }
    else
    {
        alert('Error: array2 is not an array');
    }

    //Get the first element of each array
    array1_first_element = array1[0];
    array2_first_element = array2[0];

    //Swap the first element of each array
    array1[0] = array2_first_element;
    array2[0] = array1_first_element;


    array1_first_element = null;
    array2_first_element = null;

}

function loopIt(){
    var loopCnt;
    var i;

    loopCnt=prompt("How many times do you want to loop?","3");

    if (!isNumeric(loopCnt))
    {
        alert('You entered an invalid loop count');
    }

    for (i=0; i < loopCnt; i++)
    {
        document.write("For Loop " + i + "<br>");
    }

    document.write("<br>");

    i=0;
    while (i < loopCnt)
    {
        document.write("While Loop " + i + "<br>");
        i++;
    }

    document.write("<br>");

    i = 0;
    do
    {
        document.write("Do Loop " + i + "<br>");
        i++;
    } while (i <loopCnt);

    loopCnt = null;
    i = null;
}

//Output grade based on number 0-100
function calcGrade(){

    var sGrade;
    var nGrade;

    nGrade=prompt("Enter a number between 0 and 100","0");

    //Validate user input
    if (isNumeric(nGrade))
    {

        if (nGrade < 0 || nGrade > 100)
        {
            alert('The value entered is not between 0 and 100.');
            return;
        }
    }
    else {
        alert('The value entered is not numeric.');
        return;
    }


    //Set the grade
    switch (true)
    {
        case (nGrade >= 90):
            sGrade = "A";
            break;
        case (nGrade >= 80):
            sGrade = "B";
            break;
        case (nGrade >= 70):
            sGrade = "C";
            break;
        case (nGrade >= 60):
            sGrade = "D";
            break;
        default :
            sGrade = "F";
    }


    return sGrade;
}

//Make sure the value is a number and not infinite
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//Enumerate through an object
function enumObject(){

    var obj;
    var propertyName;


    obj = prompt("Please enter an object name","window.navigator");
    obj = eval(obj);

    if (typeof obj == "object"){
        for (propertyName in obj){
            document.write(propertyName + " : " + obj[propertyName] + "<br>");
        }
    }
    else {
        alert('The object name is undefined.');
    }

    obj = null;
    propertyName = null;

}
