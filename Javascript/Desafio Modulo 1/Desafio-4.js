 // De 0-1 ano: Iniciante
 // De 1-3 anos: Intermediário
 // De 3-6 anos: Avançado
 // De 7 acima: Jedi Master

function experiencia(anos) {
  
  if(anos >= 0 && anos <=1 ){
     return console.log("você é Iniciante, porque você tem", anos, "anos de Experiência");
  } else if(anos > 1 && anos <= 3){
     return console.log("você é Intermediario, porque Você tem", anos, "anos de Experiência");
  } else if(anos > 3 && anos <= 6){
     return console.log("você é Avançado, porque Você tem", anos, "anos de Experiência");
  }else{
    return console.log("você é jedi Master, porque Você tem", anos, "anos de Experiência");
  }
 }

 var anosEstudo = 7;
 experiencia(anosEstudo);
