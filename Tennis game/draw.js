function drawRect(leftX, topY, width, height, color){
    canvasContext.fillStyle = color;
    canvasContext.fillRect(leftX, topY, width, height);
}
   function drawBall(ballX, ballY, radius, color){
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function gameOverScreen(){
    if(player1Score == FINAL_SCORE){
        text = "player 1 is the ultimate computer tennis player."
    }if(player2Score == FINAL_SCORE){
        text = "player 2 is the ultimate computer tennis player."
    }
    textWidth = canvasContext.measureText(text).width;
    finalText = 'Please click your mouse for another round';
    finalTextWidth = canvasContext.measureText(finalText).width;

    canvasContext.fillStyle = 'white'
    canvasContext.fillText(text, canvas.width/2 -textWidth/2, canvas.height/2);
    canvasContext.fillText(finalText, canvas.width/2-finalTextWidth/2, 50);
}

function gameRunningScreen(){
    drawNet();
    drawRect(0, paddle1pos, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
    drawRect(BOARD_WIDTH-PADDLE_WIDTH, paddle2pos, PADDLE_WIDTH, PADDLE_HEIGHT, 'white');
    drawBall(ballX, ballY, 10, 'white');
   canvasContext.fillText(player2Score, BOARD_WIDTH-50, 50);
    canvasContext.fillText(player1Score, 50, 50);
}
function drawNet(){
    for(var i=0; i<canvas.height; i += 30){
       drawRect(canvas.width/2, i, 2, 20, 'white')
    }
}
function drawEverything(){

    drawRect(0, 0 , BOARD_WIDTH, BOARD_HEIGHT, 'black');
   if(gameOver){
       gameOverScreen()
   }else{
       gameRunningScreen()
       }
    }