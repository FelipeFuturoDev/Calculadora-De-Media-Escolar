var numero_notas, um_, dois_, tres_, quatro_, soma_1, soma_2, soma_geral, media;
  
 function somar(){
    
    um_ = document.querySelector("#um").value;
  
    dois_ = document.querySelector("#dois").value;
    
    tres_ = document.querySelector("#tres").value;
      
    quatro_ = document.querySelector("#quatro").value;
     
  
    soma_1 = parseFloat(um_) + parseFloat(dois_) + parseFloat(tres_) + parseFloat(quatro_);
    soma_2 = 0;       
    soma_geral = parseFloat(soma_1) + parseFloat(soma_2);

    numero_notas= 4;

    media = soma_geral / parseInt(numero_notas);

if(um_>= 11 || um_ < 0 || dois_ > 11|| dois_< 0 || tres_ >= 11 || tres_ < 0 || quatro_ >= 11 || quatro_ < 0 ||media >= 11 || media <0){
    alert("Confira suas notas pois uma ou mais delas estão inválidas.");
}
else{
if(media >= 6){
    alert("Voçê esta aprovado. Sua nota é " + media + ", parabéns pelo o desempenho.")
}
if(media <= 5){
    alert("Voçê foi Reprovado. Sua média é " + media + ".")
}
     
}    
     
}
    