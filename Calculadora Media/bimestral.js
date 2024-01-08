var numero_notas, um_, dois_, soma, media;
       
//numero_notas = prompt("Qunatas notas voçê inseriu?");//
      
function somar(){
          
    um_ = document.querySelector("#um").value;
        
    dois_ = document.querySelector("#dois").value;

    numero_notas= 2;
    soma = parseFloat(um_)+parseFloat(dois_);
    media = parseFloat(soma) / parseInt(numero_notas);

if(um_>= 11 || um_ < 0 || dois_ >= 11|| dois_ < 0 || media >= 11 || media <0){
   alert("Confira suas notas pois uma ou mais delas estão inválidas.");
}
else{
if(media >= 6){
   alert("Voçê esta aprovado. Sua média " + media + ", parabéns pelo o desempenho.")
}
if(media <= 5){
   alert("Voçê foi Reprovado. Sua média é " + media + ".")
}
     
}
}