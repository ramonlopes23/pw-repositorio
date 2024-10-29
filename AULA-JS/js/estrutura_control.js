/*
function estrutura_condicional_simples(){
    
let idade = prompt("Digite a sua idade")
    if(idade > 17){
        alert("Maior de idade");
    }
}

function estrutura_condicional_composta(){
    
    let idade = prompt("Digite a sua idade")
        if(idade > 17){
            alert("Maior de idade");
        }
        else{
            alert("Menor de idade")
        }
    }
*/
function estrutura_condicional(){
    
        let idade = prompt("Digite a sua idade")
            if(idade > 65){
                alert("idoso");
            }
            else if(idade >=18 && idade <65){
                alert("Adulto")
            }
            else if(idade <=12 && idade <18){
                alert("Adolescente")
            }
            else{
                alert ("Criança")
            }
        }
estrutura_condicional();

function estrutura_de_caso(){
    let idade = prompt('Digite sua idade')
    switch(idade){
        case idade > 65:
            alert("idoso")
        break
        case idade >=18 && idade <65:
            alert('adulto')
        break    
        case idade >12 && idade<18:
            alert('adolescente')
        break
        case idade <12:
            alert('criança')
        break 
        
    }
}