let idade = 25;
console.log(idade);

idade = 32;
console.log(idade);

idade = idade +1;
console.log(idade);


function exemploVAR(){
    var x = 5
    if(true){
        var x = 10
        console.log(x);
       }
    console.log(x);
}


function exemploLET(){
    let x = 5
    if(true){
        let x = 10
        console.log(x);
       }
    console.log(x);
}

function tipoVariaveis(){
    let idade = 25
    let peso = 80.00

    console.log(idade, peso);

    let nome = 'Ramon'

    let nome_ = 'Abel'
    console.log(nome, nome_);

    let verdadeiro = true;
    let falso = false;
    console.log(verdadeiro, falso);

    let lista = ['laranja','banana','maçã'];
    let precos = [1.99, 2.99,7.99];
    let mista = ['gol',5,1.99, true, false];
    console.log(lista);
    console.log(precos);
    console.log(mista);

    let nulo = null;
    console.log(nulo);

    let desc
    console.log(desc);

    let objeto = {}
    console.log(objeto);

    let aluno ={
        nome:'Ramon',
        idade:25,
        situacao:true,
        endereco:{
            rua:'Rua Carlos de Carvalho',
            bairro:'Jardim São joão',
            cidade:'Ferraz',
            UF:'SP',
        },
        telefone: [11999999999, 11999999998]
    }
    console.log(aluno);

//acesso direto
    console.log(aluno.nome);

//modificar valor
    aluno.nome = "Ramon Lopes";
    console.log(aluno.nome);
}

exemploVAR()
exemploLET()
tipoVariaveis()