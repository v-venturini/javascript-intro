carro = {
    portas: 4,
    portaMalas: '200L',
    motor: '2.0 turbo'
}

adicionais = {
    tetoSolar: true,
    arCondicionado: true
}

console.log(carro); 
Object.assign(carro, adicionais); 
console.log(carro); 