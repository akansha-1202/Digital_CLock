
function clock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    console.log(hours,minutes,seconds);
    if(hours>12){
        hours-=12;
    }

let hrs=document.getElementById("hrs");
hrs.innerText= hours;

let mins=document.getElementById("mins");
mins.innerText= minutes;

let secs=document.getElementById("secs");
secs.innerText=seconds;

 }setInterval(()=>{clock();},1000)



 let date=new Date();
 let hours=date.getHours();
 if(hours>=12){
    let ampm=document.getElementById("ampm");
    ampm.innerText="PM"
 }
 else{
    let ampm=document.getElementById("ampm");
    ampm.innerText="AM"
 }

let greeting=document.getElementById("greeting")
         if(hours>12){
            greeting.innerText="GOOD MORNING!!";
         }
        if(hours>12 && hours<16){
            greeting.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
        }

        if(hours>=16 && hours<20){
            greeting.innerText="GOOD EVENING!!";
        }

        if(hours>=20 && hours<24){
            greeting.innerText="GOOD NIGHT!!";
        }
 
 let button = document.getElementById("button");
        button.addEventListener("mouseover", function () {
            this.innerText = "Party Time";
        })
        button.addEventListener("mouseout", function () {
            this.innerText = "Set Alarm";
        })

        button.addEventListener("click", function(){
            let date = new Date();
            let hours = date.getHours();

            let wakeup = document.getElementById("wakeup");
            let lunch = document.getElementById("lunch");
            let evening = document.getElementById("evening");
            let night = document.getElementById("night");
            if(parseInt(wakeup.value)===hours){
                document.getElementById("message").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";  
                document.getElementById("img2").src="./curtain.svg";
            }
    
           
            else if(parseInt(lunch.value)===hours){
                document.getElementById("message").innerText = 
                "LET'S HAVE SOME LUNCH !!"; 
                document.getElementById("img2").src="./afternoon.svg"; 
            }
            
            
            else if(parseInt(evening.value)===hours){
                document.getElementById("message").innerText = 
                "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"; 
                document.getElementById("img2").src="./evening.png";  
            }

            
            else if(parseInt(night.value)===hours){
                document.getElementById("message").innerText = 
                "CLOSE YOUR EYES AND GO TO SLEEP";  
                document.getElementById("img2").src="./night.jpg"; 
            }

            let timing=document.getElementsByClassName("timing");
            timing[0].innerText=wakeup.options[wakeup.selectedIndex].text
            timing[1].innerText=lunch.options[lunch.selectedIndex].text
            timing[2].innerText=evening.options[evening.selectedIndex].text
            timing[3].innerText=night.options[night.selectedIndex].text
        })