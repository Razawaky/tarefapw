$(document).ready(function() {
    //selecionar todos os buttons e monitorar os clicks
$('.img-fluid').click(function(e){  //$ simplificação do getElementBy por causa do Jquery. Jquery tem que ler toda a documentação
e.preventDefault() //Serve para controlar e gerenciar uma funcionaliade HTML (Uma função do Jquery)

//capturar o ID do button clicado
var ID = $(this).attr('id')
console.log(ID)

switch(ID) {
case 'raposa':
$('audio').attr('src', 'img/raposa.mp3')
alert('ran ran ran rrrrrrr')
break
case 'dragon':
$('audio').attr('src', 'img/dragao.mp3')
alert('roar, roooor')
break
case 'corv':
$('audio').attr('src', 'img/corvo.mp3')
alert('croac croac, cuá')
break
}  

})
})