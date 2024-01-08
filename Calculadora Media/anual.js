var numero_notas, um_, dois_, tres_, quatro_, cinco_, seis_, sete_, oito_, soma_1, soma_2, soma_geral, media;
       
//numero_notas = prompt("Qunatas notas voçê inseriu?");//

 function somar(){
   
   um_ = document.querySelector("#um").value;
 
   dois_ = document.querySelector("#dois").value;

   
   tres_ = document.querySelector("#tres").value;
 
   
   quatro_ = document.querySelector("#quatro").value;
 
   
   cinco_ = document.querySelector("#cinco").value;
 
   
   seis_= document.querySelector("#seis").value;
 
   
   sete_ = document.querySelector("#sete").value;
 
   
   oito_ = document.querySelector("#oito").value;
 
 
   soma_1 = parseFloat(um_) + parseFloat(dois_) + parseFloat(tres_) + parseFloat(quatro_);

   soma_2 = parseFloat(cinco_) + parseFloat(seis_) + parseFloat(sete_) + parseFloat(oito_);
   
   soma_geral = parseFloat(soma_1) + parseFloat(soma_2);

   numero_notas = 8;     
   media = soma_geral / parseFloat(numero_notas);

   
if(um_>= 11 || um_ < 0 || dois_ > 11|| dois_< 0 || tres_ >= 11 || tres_ < 0 || quatro_ >= 11 || quatro_ < 0 || cinco_ >= 11 || cinco_ < 0 || seis_ >= 11 || seis_ < 0 || sete_>= 11 || sete_ < 0 || oito_>= 11|| oito_ < 0||media >= 11 || media <0){
   alert("Confira suas notas pois uma ou mais delas estão inválidas.");
}
else{
if(media >= 6){
   alert("Voçê esta aprovado. Sua média é " + media + ", parabéns pelo o desempenho.")
}
if(media <= 5){
   alert("Voçê foi Reprovado. Sua média é " + media + ".")
}   

}

}   
