function computerPaddleMovement(){
    if(paddle2pos+PADDLE_HEIGHT/2 < ballY+35){
        paddle2pos += 4;
    }if(paddle2pos+PADDLE_HEIGHT/2 > ballY+35 ){
        paddle2pos -= 4;
    }
 }

 function ballMovement(){
    ballX += ballXSpeed;
    ballY += ballYSpeed;
    if(ballX >= BOARD_WIDTH){
        if(ballY >= paddle2pos && ballY <= paddle2pos+PADDLE_HEIGHT){
            ballXSpeed = -ballXSpeed;
            var deltaY = ballY -(paddle2pos+PADDLE_HEIGHT/2);
            ballYSpeed = deltaY*0.35;
        }else{
            player1Score += 1;
            ballReset()
        }
    }
    if(ballX <= 0){
        if(ballY >= paddle1pos && ballY <= paddle1pos+PADDLE_HEIGHT){
            ballXSpeed = -ballXSpeed;
            var deltaY = ballY -(paddle1pos+PADDLE_HEIGHT/2);
            ballYSpeed = deltaY*0.35;
        }else{
            player2Score += 1;
            ballReset()
        }
       
    }if(ballY >= BOARD_HEIGHT){
        ballYSpeed = -ballYSpeed;
    }if(ballY <= 0){
        ballYSpeed = -ballYSpeed;
    }
 }
 function ballReset(){
    if(player1Score == FINAL_SCORE || player2Score == FINAL_SCORE){
       gameOver = true;
    }

    ballY = BOARD_HEIGHT/2;
    ballX = BOARD_WIDTH/2;
    ballYSpeed = 4;
    ballXSpeed = -ballXSpeed;
    
}
function moveEveryThing(){
    ballMovement();
    computerPaddleMovement();

  }
  function mouseMoveHandler(evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX =  evt.clientX - rect.left - root.scrollLeft;
    var mouseY =  evt.clientY - rect.top - root.scrollTop;
    return{
        y:mouseY,
        x:mouseX
    }
}