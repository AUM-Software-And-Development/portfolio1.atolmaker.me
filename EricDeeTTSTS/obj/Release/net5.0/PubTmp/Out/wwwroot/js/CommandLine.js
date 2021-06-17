/* 1-14-2021
Author: Eric Dee
http://EricDeeTTSTS.com/ */

var WelcomeString = "Operation successful. Welcome to the construction of a web based OS.";
var OsString = "Operation successful.";
var ErrorString = "There was an error.";
var TyperCounter = 0;
var Speed = 270;
var ConsolePrinterIsBusy = false;

function PrintCommandConsoles(index) {
    Precursor();
    switch (index) {
        case 0:
            GetConsoleElementsI();
            break;
        case 1:
            GetConsoleElementsO();
            break;
        case 2:
            GetConsoleElementsO();
            break;
        case 3:
            GetConsoleElementsO();
            break;
        case 4:
            GetConsoleElementsO();
            break;
        case 5:
            GetConsoleElementsO();
            break;
        case 6:
            GetConsoleElementsE();
            break;
        default:
            return;
    }
}

function GetConsoleElementsI() {

    if (TyperCounter < WelcomeString.length) {
        ConsolePrinterIsBusy = true;
        document.getElementById("MainConsole").innerHTML += WelcomeString.charAt(TyperCounter);
        GetArticleConsoleElements();
        TyperCounter++;
        ConsolePrinterIsBusy = false;
        setTimeout(GetConsoleElementsI, Speed);
    }
    else if (TyperCounter === WelcomeString.length) {
        document.getElementById("MainConsole").innerHTML = WelcomeString;
        TyperCounter++;
    }
}

function GetConsoleElementsO() {
    if (TyperCounter < OsString.length) {
        ConsolePrinterIsBusy = true;
        document.getElementById("MainConsole").innerHTML += OsString.charAt(TyperCounter);
        GetArticleConsoleElements();
        TyperCounter++;
        ConsolePrinterIsBusy = false;
        setTimeout(GetConsoleElementsO, Speed);
    }
    else if (TyperCounter === OsString.length) {
        document.getElementById("MainConsole").innerHTML = OsString;
        TyperCounter++;
    }
}

function GetConsoleElementsE() {
    if (TyperCounter < ErrorString.length) {
        ConsolePrinterIsBusy = true;
        document.getElementById("MainConsole").innerHTML += ErrorString.charAt(TyperCounter);
        GetArticleConsoleElements();
        TyperCounter++;
        ConsolePrinterIsBusy = false;
        setTimeout(GetConsoleElementsE, Speed);
    }
    else if (TyperCounter === ErrorString.length) {
        document.getElementById("MainConsole").innerHTML = ErrorString;
        TyperCounter++;
    }
}

function GetArticleConsoleElements() {
    if (TyperCounter < Kernel1Array.length) {
        document.getElementById("ChildConsole1").innerHTML += Kernel1Array[TyperCounter];
    }
    if (TyperCounter < Kernel2Array.length) {
        document.getElementById("ChildConsole2").innerHTML += Kernel2Array[TyperCounter];
    }
}

var Kernel1Array = ["</br>Just type any <span style='color: #333999'>command</span> you see to view those pages."];
Kernel1Array.push("</br>Stay tuned...");

var Kernel2Array = ["</br><span style='color:#0abc'>go Contact Info</span>"];
Kernel2Array.push("</br><span style='color:#0abc'>go Index</span>");
Kernel2Array.push("</br><span style='color:#0abc'>go Projects</span>");
Kernel2Array.push("</br><span style='color:#0abc'>go Resume</span>");
Kernel2Array.push("</br><span style='color:#0abc'>reset</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to red</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to blue</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to gray</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to pink</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to black</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to brown</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to green</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to white</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to orange</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to purple</span>");
Kernel2Array.push("</br><span style='color:#0abc'>to yellow</span>");
Kernel2Array.push("</br><span style='color:#0abc'>view history</span>");

/* Cursor utilities */

function Precursor() {
    var Precursor = "..."
    document.getElementById("MainConsole").innerHTML = Precursor;
}