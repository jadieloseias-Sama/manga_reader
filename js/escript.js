var imagem = new Object();
imagem.numeroimg = 3;
imagem.alturaimg = 0;
imagem.larguraimg = 0;
imagem.canvasaltura = 0


function imgatualiza(Object){
  var imagen = Object;
  var novaimg = document.querySelector("#imagens");
  for (var i = 0; i <= imagen.numeroimg; i++){ 
          novaimg.setAttribute('src', 'imagen/img' + i + '.jpg');
          var img = new Image() ;
          img.src = novaimg.getAttribute('src');
         img.onload = function(){
         imagen.canvasaltura = (imagen.canvasaltura + parseInt(this.height));
         var canvas = document.getElementById('canvas');
         canvas.setAttribute('Height', imagen.canvasaltura);
         console.log("lado dentro", imagen.canvasaltura);
          }
       }
      let time = setTimeout(function(){
         draw(imagem)
       }, 1000)
}
 
function draw(Object){
        var imagen = Object;

        for (var j = 0; j <= imagen.numeroimg; j++){  
                 
          
                 var canvas = document.getElementById('canvas');
                 var context = canvas.getContext('2d');
                 var novaimg = document.querySelector("#imagens");
                 novaimg.setAttribute('src', 'imagen/img' + j + '.jpg');
                 console.log("jota", j);
                 var imagens = document.querySelector("#imagens");
                 var img = new Image();
                 img.src =  imagens.src; 
                    
                 img.onload = function(){
                        context.drawImage(img,0,imagen.alturaimg);
                        imagen.alturaimg = (imagen.alturaimg + parseInt(this.height));
                        }
              
            } 
       


       
 }      
 
 function image_scroll(){
imgatualiza(imagem);

 }