
 let count:number;
 let b:number;
 let a:number;
 let runbyplayer:number;
 let wicket:number;
 let run:number;
 let teamtotal1:number;
 let teamtotal2:number;
 let celli:number=10;
 let maxrun1=0;
 let maxrun2=0;
 let counter1:string;
 let counter2:string;
 function setcountvalue()
    {
        count=10;
    }
    function  desccount()
    {
        setcountvalue();
        celli=10;
        (<HTMLInputElement> document.getElementById("hitbutton1")).disabled = true;
        (<HTMLInputElement> document.getElementById("hitbutton2")).disabled = true;
        let t=setInterval(()=>{
            if(count>0){
            count--;
        document.getElementById("counter").innerHTML=count.toString(); 
        if(celli>0) 
            myFunction2();    
    
            }
            else{
                if(count==0)
                {
                    (<HTMLInputElement> document.getElementById("hitbutton1")).disabled = false;
        (<HTMLInputElement> document.getElementById("hitbutton2")).disabled = false;
        clearInterval(t);
                }
                if(celli==0 || count==0)
                {
                    clearInterval(t);
                return;
                }
            }
        },1000);
        
    }
    function desccount2()
    {
        celli=10;
        setcountvalue();
        (<HTMLInputElement> document.getElementById("hitbutton1")).disabled = true;
        (<HTMLInputElement> document.getElementById("hitbutton2")).disabled = true;
        let u=setInterval(()=>{
            if(count>0){
            count--;
        document.getElementById("counter").innerHTML=count.toString();
        if(celli>0)
            myFunction();
        
            }
            else{
                if(count==0)
                {
                    (<HTMLInputElement> document.getElementById("hitbutton2")).disabled = false;
                    (<HTMLInputElement> document.getElementById("hitbutton1")).disabled = false;
                    clearInterval(u);
                }
                if(celli==0 || count==0){
                    clearInterval(u);
                    return;
                }
            }
        },1000);
    }





function myFunction2() {
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById("mytable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    function cellvalue()
    {
        let run=()=>{return Math.floor(Math.random()*7)};
       
                
                cell1.innerHTML="Player "+celli;
                celli--;
                cell2.innerHTML=" "+run();
                cell3.innerHTML=" "+run();
                cell4.innerHTML=" "+run();
                cell5.innerHTML=" "+run();
                cell6.innerHTML=" "+run();
                cell7.innerHTML=" "+run();
                let sum=(Number(cell2.innerHTML)+Number(cell3.innerHTML)+Number(cell4.innerHTML)+Number(cell5.innerHTML)+Number(cell6.innerHTML)+Number(cell7.innerHTML));
                cell8.innerHTML=" "+sum;
                console.log(sum);
                let newsum=Number(document.getElementById("scoreteam1").innerHTML)+sum
                document.getElementById("scoreteam1").innerHTML=""+newsum;
                teamtotal1=newsum;
                if(maxrun1<sum)
                {
                    maxrun1=sum;
                    counter1=cell1.innerHTML;
                    console.log(counter1);
                    console.log("max="+maxrun1);
                }
                            
        
        
    }
    cellvalue();
}

function myFunction() {
    let table: HTMLTableElement = <HTMLTableElement> document.getElementById("myTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    
    function cellvalue()
    {
        let run=()=>{return Math.floor(Math.random()*7)};
       
                
                cell1.innerHTML="Player "+celli;
                celli--;
                cell2.innerHTML=" "+run();
                cell3.innerHTML=" "+run();
                cell4.innerHTML=" "+run();
                cell5.innerHTML=" "+run();
                cell6.innerHTML=" "+run();
                cell7.innerHTML=" "+run();
                let sum=(Number(cell2.innerHTML)+Number(cell3.innerHTML)+Number(cell4.innerHTML)+Number(cell5.innerHTML)+Number(cell6.innerHTML)+Number(cell7.innerHTML));
                cell8.innerHTML=" "+sum;
                console.log(sum);
                let newsum=Number(document.getElementById("scoreteam2").innerHTML)+sum
                document.getElementById("scoreteam2").innerHTML=""+newsum;
                teamtotal2=newsum;
                if(maxrun2<sum)
                {
                    maxrun2=sum;
                    counter2=cell1.innerHTML;
                    console.log(counter2);
                    console.log("max="+maxrun2);
                }              
                    
                
        
    }
    cellvalue();
}


function generate_result()
{


    (teamtotal1>teamtotal2)?(document.getElementById("won").innerHTML="Team 1"):(document.getElementById("won").innerHTML="Team 2");
    (maxrun1>maxrun2)?(document.getElementById("man_of_the_match").innerHTML=counter1):(document.getElementById("man_of_the_match").innerHTML=counter2);

    (maxrun1>maxrun2)?(document.getElementById("man_match_team").innerHTML="Team 1"):(document.getElementById("man_match_team").innerHTML="Team 2");

    (maxrun1>maxrun2)?(document.getElementById("maxscore").innerHTML=String(maxrun1)):(document.getElementById("maxscore").innerHTML=String(maxrun2)); 

    document.getElementById("myTable")?.setAttribute("style","position:relative; top:-145px");
    

}
