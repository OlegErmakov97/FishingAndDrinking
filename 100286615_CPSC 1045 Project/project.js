var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let down = document.getElementById("downButton");
let hookPositionY = 205;
let j= 119;
let timeDisplay = document.getElementById('time');

function timer(){
    
    setInterval(function(){ 
        
        timeDisplay.innerHTML = 'Time Remaining: ' + j;
        j--;

        if(j < -1 ){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            timeDisplay.innerHTML = 'Time Remaining: 0';
            alert('After a long day of fishing, you finished all of your Coranas and caught ' + i + ' fish. Time to head home.');
            timeDisplay.innerHTML = 'Time Remaining: ' + j;
            j = 119;
            score.innerHTML = 'Score: 0';
            score = 0;
            
            window.location.reload();
        }
    },1000);
    
}
timer();

let hookPositionX = 340;
let lineToHook = 200;
let currentFishPositionX01 = 1000;
let currentFishPositionY01 = 1000;
let currentFishPositionX02 = 1000;
let currentFishPositionY02 = 1000;
let currentFishPositionX03 = 1000;
let currentFishPositionY03 = 1000;

function drawStaticObjects(){
    ctx.rect(0, 300, 600, 300);
    ctx.fillStyle = "#4786ed";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(0, 0, 600, 300);
    ctx.fillStyle = "skyblue";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(0, 245, 170, 45);
    ctx.fillStyle = "brown";
    ctx.fill();

    ctx.beginPath();
    ctx.rect(140, 285, 30, 45);
    ctx.fillStyle = "brown";
    ctx.fill();

    let img = new Image();
    img.src = "corona.png";
    ctx.drawImage(img, 100, 190);
    ctx.restore();
    // body
    ctx.beginPath();
    ctx.rect(140, 200, 30, 45);
    ctx.fillStyle = "green";
    ctx.fill();

    // arm
    ctx.beginPath();
    ctx.rect(160, 210, 30, 15);
    ctx.fillStyle = "green";
    ctx.fill();

    // head
    ctx.beginPath();
    ctx.arc(155, 185, 18, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffe0bd";
    ctx.fill();

    

    // fishing rod
    ctx.beginPath();
    ctx.moveTo(180, 220);
    ctx.lineTo(340, 150);
    ctx.lineWidth = 3;
    ctx.stroke();

    // sun
    ctx.beginPath();
    ctx.arc(590, 10, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    
}

drawStaticObjects();

// fishing line
ctx.beginPath();
ctx.moveTo(340, 150);
ctx.lineTo(340, 200);
ctx.lineWidth = 1;
ctx.stroke();

// hook
ctx.beginPath();
ctx.arc(hookPositionX, 205, 5, 0, 1.5 * Math.PI);
ctx.stroke();

function moveUp(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    drawStaticObjects();
    
    // fishing rod
    ctx.beginPath();
    ctx.moveTo(180, 220);
    ctx.lineTo(340, 150);
    ctx.lineWidth = 3;
    ctx.stroke();

    // fishing line
    ctx.beginPath();
    ctx.moveTo(340, 150);
    ctx.lineTo(340, 200);
    ctx.lineWidth = 1;
    ctx.stroke();

    
    if( hookPositionY >= 210 && hookPositionY <= 600){
        //hook
        hookPositionY -= 15;
        ctx.beginPath();
        ctx.arc(hookPositionX, hookPositionY, 5, 0, 1.5 * Math.PI);
        ctx.stroke();

        // line
        lineToHook -= 15;
        ctx.beginPath();
        ctx.moveTo(340, 150);
        ctx.lineTo(340, lineToHook);
        ctx.lineWidth = 1;
        ctx.stroke();


    }else if(hookPositionY <= 210){
        ctx.beginPath();
        ctx.arc(hookPositionX, 205, 5, 0, 1.5 * Math.PI);
        ctx.stroke();
    }
    let img = new Image();
    img.src = "fish.png";
    ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
    ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
    ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
    console.clear();
    console.log('Current X Position of hook:' + hookPositionX);
    console.log('Current Y Position of hook: ' +hookPositionY);
}

function moveDown(){
   
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    drawStaticObjects();

    // fishing rod
    ctx.beginPath();
    ctx.moveTo(180, 220);
    ctx.lineTo(340, 150);
    ctx.lineWidth = 3;
    ctx.stroke();

    // fishing line
    ctx.beginPath();
    ctx.moveTo(340, 150);
    ctx.lineTo(340, 200);
    ctx.lineWidth = 1;
    ctx.stroke();

    

    if( hookPositionY >= 200 && hookPositionY < 595){
        //hook
        hookPositionY += 15;
        ctx.beginPath();
        ctx.arc(hookPositionX, hookPositionY, 5, 0, 1.5 * Math.PI);
        ctx.stroke();
        // line
        lineToHook += 15;
        ctx.beginPath();
        ctx.moveTo(340, 150);
        ctx.lineTo(340, lineToHook);
        ctx.lineWidth = 1;
        ctx.stroke();
    }else if(hookPositionY === 595){
        // hook
        ctx.beginPath();
        ctx.arc(hookPositionX, 595, 5, 0, 1.5 * Math.PI);
        ctx.stroke();

        // line
        ctx.beginPath();
        ctx.moveTo(340, 150);
        ctx.lineTo(340, 590);
        ctx.lineWidth = 1;
        ctx.stroke();
        
    }
    let img = new Image();
    img.src = "fish.png";
    ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
    ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
    ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
    
    console.clear();
    console.log('Current X Position of hook: ' + hookPositionX);
    console.log('Current Y Position of hook: ' + hookPositionY);
    
    
}

function drawCurrentHookPosition(){
    
    ctx.beginPath();
    ctx.arc(hookPositionX, hookPositionY, 5, 0, 1.5 * Math.PI);
    ctx.lineWidth = 1;
    ctx.stroke();

    // line
        
    ctx.beginPath();
    ctx.moveTo(340, 150);
    ctx.lineTo(340, lineToHook);
    ctx.lineWidth = 1;
    ctx.stroke();
}



console.log('Current X Position of hook: ' +hookPositionY);
console.log('Current Y Position of hook:' + hookPositionX);


let score = document.getElementById('score');
let i = 0;

function spawnFishLine01(){
    let img = new Image();
    img.src = "fish.png";
    img.onload = function () {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        drawStaticObjects();
        drawCurrentHookPosition();

        function fish01(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 = 540;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish02(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 = 480;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish03(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 = 420;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish04(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 = 370;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        
                
        function fish05(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 = 320;
            currentFishPositionY01 = 385;
            
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            
        }
        function fish06(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 -= 40;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            console.clear();
            console.log('Current Fish X Position:' + currentFishPositionX01);
            console.log('Current Fish Y Position:' + currentFishPositionY01);
            if(hookPositionX === 340 && hookPositionY === 400){
                i++;
                score.innerHTML = 'Score: ' + i;
                ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                currentFishPositionX01 = 1000;
                currentFishPositionY01 = 1000;
                ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                setTimeout(function(){ currentFishPositionX01 = 1000; }, 2000);
                setTimeout(function(){ currentFishPositionY01 = 1000; }, 2000);
                ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
                ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
                ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            }

            if(currentFishPositionX01 === 1000 && currentFishPositionY01 === 1000){
                
                drawStaticObjects();
                drawCurrentHookPosition();
                ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
                ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
                ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
                
            }  
        }
        function fish07(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 -= 40;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);    
        }
        function fish08(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 -= 40;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish09(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 -= 40;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function fish10(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 -= 40;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish11(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 -= 40;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);    
        }
        function fish12(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 -= 40;
            currentFishPositionY01 = 385;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);    
        }
        function goneFish(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX01 = 1000;
            currentFishPositionY01 = 1000;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        
        setTimeout(function(){ fish01() }, 0);
        setTimeout(function(){ fish02() }, 1000);
        setTimeout(function(){ fish03() }, 2000);
        setTimeout(function(){ fish04() }, 3000);
        setTimeout(function(){ fish05() }, 4000);
        setTimeout(function(){ fish06() }, 5000);
        setTimeout(function(){ fish07() }, 6000);
        setTimeout(function(){ fish08() }, 7000);
        setTimeout(function(){ fish09() }, 8000);
        setTimeout(function(){ fish10() }, 9000);
        setTimeout(function(){ fish11() }, 10000);
        setTimeout(function(){ fish12() }, 10000);
        setTimeout(function(){ goneFish() }, 11000);
    };
}

function spawnFishLine02(){
    let img = new Image();
    img.src = "fish.png";
    img.onload = function () {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        drawStaticObjects();
        drawCurrentHookPosition();

        function fish01(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 = 540;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish02(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02);
        }
        function fish03(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish04(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish05(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
            
        }
        function fish06(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            
        }
        function fish07(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            if(hookPositionX === 340 && hookPositionY === 490){
                i++;
                score.innerHTML = 'Score: ' + i;
                ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                currentFishPositionX02 = 1000;
                currentFishPositionY02 = 1000;
                ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                setTimeout(function(){ currentFishPositionX02 = 1000; }, 2000);
                setTimeout(function(){ currentFishPositionY02 = 1000; }, 2000);
                ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
                ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
                ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            }

            if(currentFishPositionX02 === 1000 && currentFishPositionY02 === 1000){
                
                drawStaticObjects();
                drawCurrentHookPosition();
                ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
                ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
                ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
                
            }
            console.clear();
            console.log('Current Fish X Position:' + currentFishPositionX02);
            console.log('Current Fish Y Position:' + currentFishPositionY02);
        }
        function fish08(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function fish09(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function fish10(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);    
        }
        function fish11(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function fish12(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX02 -= 40;
            currentFishPositionY02 = 475;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function goneFish(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
            currentFishPositionX02 = 1000;
            currentFishPositionY02 = 1000;
        }
        
        setTimeout(function(){ fish01() }, 0);
        setTimeout(function(){ fish02() }, 1000);
        setTimeout(function(){ fish03() }, 2000);
        setTimeout(function(){ fish04() }, 3000);
        setTimeout(function(){ fish05() }, 4000);
        setTimeout(function(){ fish06() }, 5000);
        setTimeout(function(){ fish07() }, 6000);
        setTimeout(function(){ fish08() }, 7000);
        setTimeout(function(){ fish09() }, 8000);
        setTimeout(function(){ fish10() }, 9000);
        setTimeout(function(){ fish11() }, 10000);
        setTimeout(function(){ fish12() }, 10000);
        setTimeout(function(){ goneFish() }, 11000);
    };
}

function spawnFishLine03(){
    let img = new Image();
    img.src = "fish.png";
    img.onload = function () {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        drawStaticObjects();
        drawCurrentHookPosition();

        function fish01(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 = 540;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish02(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02);
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
        }
        function fish03(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish04(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
        }
        function fish05(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03); 
            
        }
        function fish06(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            
        }
        function fish07(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            if(hookPositionX === 340 && hookPositionY === 580){
                i++;
                score.innerHTML = 'Score: ' + i;
                ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                currentFishPositionX03 = 1000;
                currentFishPositionY03 = 1000;
                ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
                setTimeout(function(){ currentFishPositionX03 = 1000; }, 2000);
                setTimeout(function(){ currentFishPositionY03 = 1000; }, 2000);
                ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
                ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
                ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
            }

            if(currentFishPositionX03 === 1000 && currentFishPositionY03 === 1000){
                
                drawStaticObjects();
                drawCurrentHookPosition();
                ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
                ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
                ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);
                
            }
            console.clear();
            console.log('Current Fish X Position:' + currentFishPositionX02);
            console.log('Current Fish Y Position:' + currentFishPositionY02);
        }
        function fish08(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function fish09(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function fish10(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);    
        }
        function fish11(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function fish12(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
             
            currentFishPositionX03 -= 40;
            currentFishPositionY03 = 570;
            ctx.drawImage(img, currentFishPositionX01, currentFishPositionY01);
            ctx.drawImage(img, currentFishPositionX02, currentFishPositionY02); 
            ctx.drawImage(img, currentFishPositionX03, currentFishPositionY03);   
        }
        function goneFish(){
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            drawStaticObjects();
            drawCurrentHookPosition();
            currentFishPositionX03 = 1000;
            currentFishPositionY03 = 1000;
        }
        
        setTimeout(function(){ fish01() }, 0);
        setTimeout(function(){ fish02() }, 1000);
        setTimeout(function(){ fish03() }, 2000);
        setTimeout(function(){ fish04() }, 3000);
        setTimeout(function(){ fish05() }, 4000);
        setTimeout(function(){ fish06() }, 5000);
        setTimeout(function(){ fish07() }, 6000);
        setTimeout(function(){ fish08() }, 7000);
        setTimeout(function(){ fish09() }, 8000);
        setTimeout(function(){ fish10() }, 9000);
        setTimeout(function(){ fish11() }, 10000);
        setTimeout(function(){ fish12() }, 10000);
        setTimeout(function(){ goneFish() }, 11000);
    };
}

function fishSpawnIntervals(){
    let randomNumber01 = Math.floor(Math.random() * 3);
    let randomNumber02 = Math.floor(Math.random() * 3);
    let randomNumber03 = Math.floor(Math.random() * 3);

    if(randomNumber01 === 0){ // generates a random number and if not true then wait one sec and generate another
         spawnFishLine01();
    }
    if (randomNumber02 === 1){
            spawnFishLine02();
    }
       
    if (randomNumber03 === 2){
        spawnFishLine03();
    }
    
}


fishSpawnIntervals();
setInterval(function(){ fishSpawnIntervals();}, 12000);



// let randomNumber = Math.floor(Math.random() * 5);
// if(randomNumber === 0){ // generates a random number and if not true then wait one sec and generate another