function valida(){
  	sNome = document.forms.boletim.nome;
  	sEmail = document.forms.boletim.email;
  	
  	if (sNome.value == "" || sNome.value=="Digite seu nome"){
  		alert("O campo Nome deve ser preenchido!");
  		sNome.focus();
  		return false;
  	}
  
  	if (sEmail.value == "" || sEmail.value=="Digite seu e-mail"){
  		alert("O campo Email deve ser preenchido!");
  		sEmail.focus();
  		return false;
  	}
    
  	parte1 = sEmail.value.indexOf("@");
  	parte2 = sEmail.value.length;
  	if (!(parte1 >= 3 && parte2 >= 6)) {
  		alert("O campo Email deve ser conter um endereco eletrônico!");
  		sEmail.focus();
  		return false;
  	}
  	return true;
}
