var imagem = new Object();
imagem.numeroimg = 4;
imagem.alturaimg = 0;
imagem.larguraimg = 0;
imagem.canvasaltura = 0
imagem.canvaslargura = 0


function imgdesenha(Object) {
imagen = Object;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var imagens = document.querySelector("#imagens");
var img = new Image();
img.src = imagens.src; 

img.onload = function(){
context.drawImage(img,0,imagen.alturaimg);
imagen.alturaimg = (imagen.alturaimg + parseInt(this.height));
}
}

function atualizacanvas(Object){
  var imagen = Object;
  var novaimg = document.querySelector("#imagens");
  for (var i = 0; i <= imagen.numeroimg; i++){ 
          novaimg.setAttribute('src', 'imagen/img' + i + '.jpg');
          var img = new Image() ;
          img.src = novaimg.getAttribute('src');
         img.onload = function(){
         imagen.canvasaltura = (imagen.canvasaltura + parseInt(this.height));
         imagen.canvaslargura = (parseInt(this.width) > imagen.canvaslargura ? parseInt(this.width) : imagen.canvaslargura);
         var canvas = document.getElementById('canvas');
         canvas.setAttribute('Width', imagen.canvaslargura);
         canvas.setAttribute('Height', imagen.canvasaltura);
        
          }
       }
      let time = setTimeout(function(){
         imgatualiza(imagem)
       }, 30)
}
 
function imgatualiza(Object){
var imagen = Object;
        for (var j = 0; j <= imagen.numeroimg; j++){  
                 var novaimg = document.querySelector("#imagens");
                 novaimg.setAttribute('src', 'imagen/img' + j + '.jpg');
                   imgdesenha(imagen); 
            }      
 }      
 
 function image_scroll(){
atualizacanvas(imagem);
 }