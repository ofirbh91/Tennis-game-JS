var canvas;
var canvasContext;
const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 600;

const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 125;
var paddle1pos = BOARD_HEIGHT/2-PADDLE_HEIGHT/2;
var paddle2pos = BOARD_HEIGHT/2-PADDLE_HEIGHT/2;
const FPS = 30;

var ballX = BOARD_WIDTH/2;
var ballY = BOARD_HEIGHT/2;
var ballXSpeed = 10;
var ballYSpeed = 4;
var player1Score = 0;
var player2Score = 0;
var whiteColor = 'white';
const COM_PADDLE_SPEED = 35;
gameOver = false;
const FINAL_SCORE = 3;


 canvas = document.getElementById('tennis');
 canvasContext = canvas.getContext('2d');
      
     setInterval(()=>{
         moveEveryThing();
         drawEverything();
     },1000/FPS);
     
     addEventListener('mousemove',(evt)=>{
        paddle1pos = mouseMoveHandler(evt).y-PADDLE_HEIGHT/2;
     });
     addEventListener('mousedown', (evt)=>{
         if(gameOver){
             player1Score = 0;
             player2Score = 0;
             gameOver = false;
         }
     })
     
     

    

     

    


     

    

  
 
 
 
 
 