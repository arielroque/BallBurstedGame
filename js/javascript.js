timeId = 0;

function startGame() {

    var url = window.location.search;
    var gameLevel = url.replace("?", "");
    var time = 0;
    var qtdBall = 80;
    var qtdBursted =0;

    switch (gameLevel) {

        case "1":
            time = 120;
            break;

        case "2":
            time = 60;
            break;

        case "3":
            time = 30;
            break;
    }

    document.getElementById("qtdBall").innerHTML= qtdBall;
    document.getElementById("qtdBallBursted").innerHTML = qtdBursted;
    document.getElementById("time").innerHTML =time;

    criarBaloes(qtdBall);

    timeCount(time + 1);

}

function timeCount(time){

    time = time-1;

    if(time<=-1){
        clearTimeout(timeId);
        gameOver();

        return false;
    }

    document.getElementById("time").innerHTML=time;
    // função do javaScript responsável por chamar a função a cada 1 segundo.
    timeId = setTimeout("timeCount("+time+")",1000);
    

}

function stopGame(){

    clearTimeout(timeId);
}

function removeOnClickRemaningBalls(){

    var i=1;

    while (document.getElementById("b"+i)){
          
        document.getElementById("b"+i).onclick="";
        i++;
    }

}

function gameOver(){

    removeOnClickRemaningBalls();

    alert("Game over, you do not bursted all balls");




}

function isPlayerWin(ballsRemaining, ballsBursted){


    if(ballsRemaining == 0){

        alert("Congratulation, you win!!!");

        stopGame();
    }


}

function points(){
  
     var ballsRemaining = document.getElementById("qtdBall").innerHTML;
     var ballsBursted = document.getElementById("qtdBallBursted").innerHTML;

     ballsRemaining = Number.parseInt(ballsRemaining);
     ballsBursted = Number.parseInt(ballsBursted);

     ballsRemaining -= 1;
     ballsBursted +=1;

     document.getElementById("qtdBall").innerHTML= ballsRemaining;
     document.getElementById("qtdBallBursted").innerHTML = ballsBursted;

     isPlayerWin(ballsRemaining,ballsBursted);

}

function burstBall(element){

    var id = element.id;

    document.getElementById(id).onclick = null;

    document.getElementById(id).src="images/balao_azul_pequeno_estourado.png";

    points();






}

function criarBaloes(qtdBall){

    for (var i=1; i<=qtdBall;i++){

         var ball = document.createElement("img");

         ball.src="images/balao_azul_pequeno.png";
         ball.style="margin:10px;";
         ball.id="b"+i;
         ball.onclick= function(){

            burstBall(this);

         }

         document.getElementById("game").appendChild(ball);

    }


}