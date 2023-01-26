window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };        

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  const roadImage = new Image();
  roadImage.src = "./images/road.png"
  
  let carImage;
  carImage = new Image();
  carImage.src = "images/car.png";

  function startGame() {
   
    roadImage.addEventListener ('load', ()=>{
      ctx.drawImage(roadImage, 0, 20, 500, 600);
    })  
    
    carImage.addEventListener ('load', ()=>{
                this.print();
    })
    setInterval(()=>{
      // console.log("setinterval");
      update();
    }, 16);
  }


  class Player {
    constructor(x, y, width, height, velocidadx){
              this.x = x;
              this.y = y;
              this.width = width;
              this.height = height;
              this.velocidadx = velocidadx;
              this.carImage = new Image();
              this.carImage.src = "images/car.png";
              this.points = 0
        }
        print() {
                ctx.drawImage(this.carImage, this.x, this.y, this.width, this.height);
        }
        scorePoints(){
          
        }
  } 

      
  let car = new Player(225, 515, 50, 90, 20);   
  let update = ()=>{
    //limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //recalcular posiciones (si hace falta)
    //repintar
    ctx.drawImage(roadImage, 0, 20, 500, 600);
    car.print();
  }



  document.getElementsByTagName("body")[0].addEventListener("keydown", (event)=>{
    //event.currentTarget -> quien tenga asignado el evento
    //event.key -> la tecla pulsada
      console.log(event.key);
      switch(event.key){
          case "ArrowLeft":
              car.x -= car.velocidadx;
              if(car.x < 0) car.x = 0;
              break;
          case "ArrowRight":
              car.x += car.velocidadx;
              if(car.x > canvas.width - car.width) car.x = canvas.width - car.width;
              break;
          default:
              console.log("se ha pulsado otra tecla");
              break;
          }
    });
  }
      

