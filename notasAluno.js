function situacao(){

    //Capturar os valores
    var Av1 = document.getElementById('txtAv1').value;
    var Av2 = document.getElementById('txtAv2').value;
    var Av3 = document.getElementById('txtAv3').value;
    var Aluno = document.getElementById('txtAluno').value;
    var outResultado = document.getElementById('outResultado');
    var outAluno = document.getElementById('outAluno');

    
    
    
    
    //media
    if(Av1 >= 4 && Av2 >= 6){
        outResultado.textContent = `Parabéns ${Aluno}, você foi aprovado(a).`}
       
            else if(Av1 < 4) {outResultado.textContent = `Aluno automaticamente reprovado(a)`}
            else if(Av2 < 4){outResultado.textContent = `Aluno automaticamente reprovado(a)`}
            else if(Av2 >= 4 && Av1 >=7){outResultado.textContent = `Parabéns ${Aluno}, você foi aprovado(a).`}
            else if(Av3 >= 4 && Av1 >=5){outResultado.textContent = `Parabéns ${Aluno}, você foi aprovado(a).`}
            else if(Av1 >= 4 && Av3 >=8){outResultado.textContent = `Parabéns ${Aluno}, você foi aprovado(a).`}   
                
                else{outResultado.textContent = `${Aluno}, você foi reprovado(a).`}


}



document.getElementById('btnVerificar').addEventListener('click', situacao)