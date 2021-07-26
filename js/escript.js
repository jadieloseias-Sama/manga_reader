function imgatualiza(quantas_imagens)
{ var quantas_imagens
     for (var i = 0; i <= quantas_imagens ; i++){
     var novaimg = document.querySelector("#imagens");
     novaimg.setAttribute('src', 'imagen/img' + i + '.jpg');
     console.log("foi");
     draw()
     }
}
 function draw()
 {
    var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var imagen = document.getElementById('imagens')
        var img = new Image();
            img.src =  imagen.src;
        console.log(img.src); 
        img.onload = function() {
            ctx.drawImage(img,0,0);
    }
 }      
 function image_scroll()
 {
var numero = 3
imgatualiza(numero)
 }