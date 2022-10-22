/* Faca um programa para calcular o valor de uma viagem.
voce tera 3 variaveis. sendo elas :
1 - Preco do combustivel ;
2 - Gasto medio de combustivel do carro por km
3 - Distancia em km da viagem ; 

const precoCombustivel = 5.79;  preco do combustivel
const kmPorLitros = 12;  a cada 10km percorridos  se gasta 1 litros
const distanciakm = 100; a distancia que eu quero percorrer

const litrosConsumidos= distanciakm/kmPorLitros;  km/l
const valorGasto = litrosConsumidos * precoCombustivel

console.log (valorGasto.toFixed(2))  deixar o resultado so com no maximo duas casas decimais 



------------- ESTRUTURA CONDICIONAL -------------
if () {} - se tal condicao for verdadeira faca 
if (!) {}- negacao- se tal condicao for falsa faca  
else - se nao 

const numero = 0;

const numeroDivisivelPor5 = (numero % 5 ) === 0;

console.log(numeroDivisivelPor5);

if (numero === 0) {
    console.log('O numero e invalido')
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Nao');
}

------------- EXERCICIOS -------------

Faca um programa para calcular o valor de uma viagem.

Voce tera 5 variaveis. Sendo elas :

1 - Preco do etanol ;  
2 - Preco do gasolina ;
3 - O tipo de combustivel que esta no seu carro;
4 - Gasto medio de combustivel do carro por km;
5 - Distancia em km da viagem ; 

Imprima no console o valor que sera gasto para realizar esta viagem.

const precoDoEtanol = 2.47;
const precoDaGasolina = 5.25;
const KmPorLitro = 15;
const distanciaEmKM= 200;
const GastoPorLitro = distanciaEmKM/KmPorLitro;
const tipoCombustivel= 'Etanol'

if (tipoCombustivel === 'Gasolina') {
    const GastoMedio = GastoPorLitro * precoDoEtanol; 
    console.log(GastoMedio.toFixed(2));   
} else {
    const GastoMedio = GastoPorLitro * precoDaGasolina;
    console.log(GastoMedio.toFixed(2));     
}

Faca um algoritmo que dado as 3 notas por um aluno em um semestre da faculdade calcule e imprima a media e a sua classificacao
conforme a tabela abaixo.

media = (nota1 + nota2 + nota 3 )/3
classificacao 
- Media menor que 5, reprovacao ;
- Media entre 5 e 7 recuperacao;
- Media acima de 7, passou de semestre;

const nota1= 10
const nota2= 5
const nota3= 10
const media= (nota1+nota2+nota3)/3

if (media>7) {
    console.log('Parabens! Voce passou de semestre! (aprovacao)')
} else if (media<5)  {
    console.log('Que pena!Vamos nos ver denovo no proximo semestre... (reprovacao)')
} else if(media<=7) {
    console.log('Ops.. Nao foi dessa vez. Mas continue estudando. Voce ainda tem chances (recuperacao)')
}

Formula do IMC = peso (altura*altura)
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condicao de acordo com a tabela abaixo:

IMC em adultos Condicao:
- Abaixo de 18.5 Abaixo do peso; 
- Entre de 18.5 e 25 Peso normal; 
- Entre de 25 e 30 Acima do peso;
- Entre de 30 e 50 Obeso;
- Acima de 40 Obesidade Grave.

const peso = 70;
const altura= 1.5;
const imc= peso / (altura*altura)

if (imc<18.5) {
    console.log('Abaixo do peso');
} else if (imc>=18.5 && imc<25) {
    console.log('Peso normal')
} else if (imc>=25 && imc<30 ) {
    console.log('Acima do peso')
} else if (imc>=30 && imc<50) {
    console.log('Obeso')
} else {
    console.log('Obesidade Grave')    
}

console.log(imc.toFixed(2));

Elabore um algoritmo que calcule o que deve ser pago  por um produto, considerando o preso normal de etiqueta e a escolha 
da condicao de pagamento. Utilizr os codigos da tabela a seguir para ler qual a condicao de pagamento e efetuar o calculo 
adequado:

Codigo de Condicao de pagamento:
1 - A vista Debito, recebe 10% de desconto;
2 - A vista no Dinheiro ou no PIX, recebe 15% de desconto;
3 - Em duas vezes, preco normal de etiqueta sem juros;
4 - Acima de duas vezes preco normal de etiqueta mais juros de 10%;

const valor= 200;
const desconto10= (valor * 10)/100;
const desconto15= (valor *15)/100;
const semDesconto= valor;
const pagamentoDebito= valor - desconto10;
const pagamentoDinheiroOuPix= valor - desconto15; 
const pagamentoComJuros= valor + desconto10; 

const tipoDePagamento= 4

if(tipoDePagamento === 1) {
    console.log(pagamentoDebito);
} else if(tipoDePagamento === 2) {
    console.log(pagamentoDinheiroOuPix);
} else if (tipoDePagamento === 3) {
    console.log(semDesconto);
} else {
    console.log(pagamentoComJuros);
}

----- Funcoes ------ 
Exemplos:

function escrevaMeuNome(nome) {
    console.log('Meu nome e :' +nome);
}

escrevaMeuNome('Stephanie');

function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez= quadrado(10);
console.log(quadradoDeDez);

----- Transformando exercicico em funcao -----

Calculo do IMC: 

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 50) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

(function main() {
    const peso = 40;
    const altura = 1.5;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}) ();

Calculo do desconto/juros:

Codigo de Condicao de pagamento:
1 - A vista Debito, recebe 10% de desconto;
2 - A vista no Dinheiro ou no PIX, recebe 15% de desconto;
3 - Em duas vezes, preco normal de etiqueta sem juros;
4 - Acima de duas vezes preco normal de etiqueta mais juros de 10%;

*/
function aplicarDesconto(valor, desconto) {
    return valor - ((valor * desconto) / 100);
}
function aplicarJuros(valor, juros) {
    return valor + ((valor * juros) / 100);
}


const precoEtiqueta = 100;
const tipoDePagamento = 4;

if (tipoDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (tipoDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (tipoDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}

