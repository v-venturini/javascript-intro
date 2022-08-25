function cadastro (nome,idade) {
    if(nome == undefined || idade == undefined) {
        console.log('Preencha o nome e a idade'); 
    } else {
        console.log("Olá " + nome + ", bem vinda!"); 
    }
}
cadastro("Vi",18);
cadastro("Vi");