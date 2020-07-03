var count;
var totalbyplayerteam1;
var totalbyplayerteam2;
var runbyplayer;
var wicket;
var run;
var teamtotal1 = 200;
var teamtotal2 = 300;
var celli = 10;
function setcountvalue() {
    count = 60;
}
function desccount() {
    setcountvalue();
    celli = 10;
    document.getElementById("hitbutton1").disabled = true;
    document.getElementById("hitbutton2").disabled = true;
    var t = setInterval(function () {
        if (count > 0) {
            count--;
            document.getElementById("counter").innerHTML = count.toString();
            if (celli > 0)
                myFunction2();
        }
        else {
            if (count == 0) {
                document.getElementById("hitbutton1").disabled = false;
                document.getElementById("hitbutton2").disabled = false;
                clearInterval(t);
            }
            if (celli == 0 || count == 0) {
                clearInterval(t);
                return;
            }
        }
    }, 1000);
}
function desccount2() {
    celli = 10;
    setcountvalue();
    document.getElementById("hitbutton1").disabled = true;
    document.getElementById("hitbutton2").disabled = true;
    var u = setInterval(function () {
        if (count > 0) {
            count--;
            document.getElementById("counter").innerHTML = count.toString();
            if (celli > 0)
                myFunction();
        }
        else {
            if (count == 0) {
                document.getElementById("hitbutton2").disabled = false;
                document.getElementById("hitbutton1").disabled = false;
                clearInterval(u);
            }
            if (celli == 0 || count == 0) {
                clearInterval(u);
                return;
            }
        }
    }, 1000);
}
function myFunction2() {
    var table = document.getElementById("mytable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    function cellvalue() {
        var run = function () { return Math.floor(Math.random() * 7); };
        cell1.innerHTML = "Player " + celli;
        celli--;
        cell2.innerHTML = " " + run();
        cell3.innerHTML = " " + run();
        cell4.innerHTML = " " + run();
        cell5.innerHTML = " " + run();
        cell6.innerHTML = " " + run();
        cell7.innerHTML = " " + run();
        var sum = (Number(cell2.innerHTML) + Number(cell3.innerHTML) + Number(cell4.innerHTML) + Number(cell5.innerHTML) + Number(cell6.innerHTML) + Number(cell7.innerHTML));
        cell8.innerHTML = " " + sum;
    }
    cellvalue();
}
function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    function cellvalue() {
        var run = function () { return Math.floor(Math.random() * 7); };
        cell1.innerHTML = "Player " + celli;
        celli--;
        cell2.innerHTML = " " + run();
        cell3.innerHTML = " " + run();
        cell4.innerHTML = " " + run();
        cell5.innerHTML = " " + run();
        cell6.innerHTML = " " + run();
        cell7.innerHTML = " " + run();
        var sum = (Number(cell2.innerHTML) + Number(cell3.innerHTML) + Number(cell4.innerHTML) + Number(cell5.innerHTML) + Number(cell6.innerHTML) + Number(cell7.innerHTML));
        cell8.innerHTML = " " + sum;
    }
    cellvalue();
}
function generate_result() {
    (teamtotal1 > teamtotal2) ? (document.getElementById("won").innerHTML = "Team 1") : (document.getElementById("won").innerHTML = "Team 2");
}
