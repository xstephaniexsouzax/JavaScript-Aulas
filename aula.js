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

1)Faca um programa para calcular o valor de uma viagem.

Voce tera 5 variaveis. Sendo elas :

1 - Preco do etanol ;  
2 - Preco do gasolina ;
3 - O tipo de combustivel que esta no seu carro;
4 - Gasto medio de combustivel do carro por km;
5 - Distancia em km da viagem ; 

Imprima no console o valor que sera gasto para realizar esta viagem.

function calcularGasto (preco, distancia, litros) {
    return preco * (distancia/litros);
}

const precoDoEtanol = 2.47;
const precoDaGasolina = 5.25;
const KmPorLitro = 15;
const distanciaEmKM= 200;
const tipoCombustivel= 'Gasolina'

if (tipoCombustivel === 'Gasolina') {
    console.log(calcularGasto(precoDaGasolina, distanciaEmKM, KmPorLitro)); 
} else {
    console.log(calcularGasto(precoDoEtanol, distanciaEmKM, KmPorLitro));  
}

Calculo das notas de alunos(as):

Faca um algoritmo que dado as 3 notas por um aluno em um semestre da faculdade calcule e imprima a media e a sua classificacao
conforme a tabela abaixo.

media = (nota1 + nota2 + nota 3 )/3
classificacao 
- Media menor que 5, reprovacao ;
- Media entre 5 e 7 recuperacao;
- Media acima de 7, passou de semestre;

function calcularMediaDosAlunos(notaA, notaB, notaC){
        return (notaA+notaB+notaC) / 3

}

const nota1= 2
const nota2= 5
const nota3= 3

if (calcularMediaDosAlunos(nota1, nota2, nota3) > 7) {
    console.log('Parabens! Voce passou de semestre! (aprovacao)')
} else if (calcularMediaDosAlunos(nota1, nota2, nota3) < 5)  {
    console.log('Que pena!Vamos nos ver denovo no proximo semestre... (reprovacao)')
} else if(calcularMediaDosAlunos(nota1, nota2, nota3) <= 7) {
    console.log('Ops.. Nao foi dessa vez. Mas continue estudando. Voce ainda tem chances (recuperacao)')
}

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

---- Objetos e Classes ---- 

const Stephanie ={
    nome: 'stephanie',
    idade: 23,
}

console.log(Stephanie.nome);
console.log(Stephanie.idade);
console.log(Stephanie);

Stephanie.altura= 1.60;
console.log(Stephanie);

obs : alt+96= `


const Pessoa = {
    nome: 'stephanie',
    idade: 23,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

Pessoa.nome= 'joabe';
Pessoa.idade= 18;

Pessoa.descrever();


class Pessoa{
    nome;
    idade;
    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);       
    }
}

const jefte = new Pessoa();
    jefte.nome = 'jefte-feio';
    jefte.idade= 21;

const stephanie= new Pessoa();
    stephanie.nome= 'stephanie-bonita';
    stephanie.idade=23;

console.log(jefte);
console.log(stephanie);

--- construtor-class ---- 

class Pessoa{
    nome;
    idade;
    constructor (nome,idade) {
        this.nome= nome;
        this.idade=idade;
        this.anoDeNascimento = 2022- idade;       
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}

const stephanie= new Pessoa('stephanie-bonita', 23);
const jefte= new Pessoa('jefte-feio', 20);
const joabe= new Pessoa('joabe-insuportavel', 17);


console.log(jefte);
console.log(stephanie);
console.log(joabe);



class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararIdades(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}
const stephanie = new Pessoa('stephanie-bonita', 23);
const jefte = new Pessoa('jefte-feio', 40);

compararIdades(stephanie, jefte);

---- Exercicios ----
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.


class carros {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca, cor, gastoMedioPorKm) {
        this.cor= cor;
        this.marca= marca;
        this.gastoMedioPorKm = gastoMedioPorKm 
    }
    calcularPercurso (distanciaEmKm,precoDoCombustivel){
        return distanciaEmKm* this.gastoMedioPorKm * precoDoCombustivel;
    }
   
}

const carro1= new carros ('Aston Martin','azul', 1/12);
console.log(carro1.calcularPercurso(70,7));

const palio = new carros ('fiat ', 'marron', 1/10);
console.log(palio.calcularPercurso(60,7))

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;


class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome= nome;
        this.peso= peso;
        this.altura= altura;
    }
    calcularImc (peso,altura){
        return this.peso / (this.altura* this.altura);
    } 
    classificacaoImc(){
        const imc = this.calcularImc();
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
}

const jose = new Pessoa ('jose', 70, 1.75);
console.log(jose.classificacaoImc());

const marcos = new Pessoa ('marcos', 60, 1.85);
console.log(marcos.classificacaoImc());

Arrays e Estrutura de Repetição em JavaScript 


const notas = [];

notas.push(10);
notas.push(7);
notas.push(3);
notas.push(5);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota; 
    
}

const media= soma / notas.length; 
console.log(media);

---- Exercicio ---- 
1) Crie um programa que dado um numero imprima a sua tabuada

const tabuada = [5]; 

for (let t = 1; t <= 10; t++) {
    console.log(t * tabuada); 
}

2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado. 

const numeros=[25,4,3,2,5];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 == 0) {
       console.log(numero);
    } 
}
*/

