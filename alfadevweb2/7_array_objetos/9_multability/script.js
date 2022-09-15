//multabilidade altera um obj e altera todos 
pessoa = {
    nome: 'juviliane'
}

pessoa2 = pessoa;

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa2.nome = 'Vic';

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa2.nome = 'Milena';

console.log(pessoa.nome);
console.log(pessoa2.nome);

pessoa3 = {
    nome: 'jorge'
}

pessoa3 = pessoa;

console.log(pessoa3.nome);