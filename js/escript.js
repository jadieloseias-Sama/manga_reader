
var heightimg2


function imgatualiza(quantas_imagens)
{ var quantas_imagens
  var heightimg = 0
     for (var i = 0; i <= quantas_imagens ; i++)
        {
         var canvas = document.getElementById('canvas');
         var novaimg = document.querySelector("#imagens");
         novaimg.setAttribute('src', 'imagen/img' + i + '.jpg');
            if(0 < heightimg){
             canvas.setAttribute('height', heightimg)
             alert(heightimg)
            }
             heightimg = draw(heightimg)
          
          } 
}
 
function draw(heightimg)
 {  heightimg2 = heightimg
    var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var imagen = document.getElementById('imagens')
        var img = new Image();
        img.src =  imagen.src; 
            img.onload = function() {
                ctx.drawImage(img,0,heightimg2);
                heightimg2 = ((heightimg2) + (this.height));
                
                }
    
    return heightimg2
 }      
 
 function image_scroll()
 {
var numero = 3
imgatualiza(numero)

 }