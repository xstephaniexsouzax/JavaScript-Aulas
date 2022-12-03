let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; //lista de numeros

let valor = parseInt(-16); //valor inserido

let achou = false; // começa com false, pois ainda n entrou no laço de repetição para identificão do valor de acordo com a lista 

let posição = parseInt();

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

for (let i = 0; i < elementos.length; i++) {
    if (elementos[i]== valor){
        achou = true
        posicao= i 
        break
    } else {
        
    }
}

if (achou)  {
   console.log("Achei " + valor + " na posicao " + posicao);
} else {
  console.log("Numero " + valor + " nao encontrado!");
}