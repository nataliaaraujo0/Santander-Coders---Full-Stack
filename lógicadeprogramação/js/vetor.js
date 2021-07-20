//push -> add itens no array

let vetor = [];
for (i = 0; i<10; i++) {
    vetor.push(i);
}

console.log(vetor);

//percorrendo o vetor

for(let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}

//for-of -> percorrer vetor com maior facilidade
const vetor3 = [10,20,30,40,50];
for (let valor of vetor3){ //colocando os dados do vetor dentro da varaivel valor
    console.log(valor);
}
