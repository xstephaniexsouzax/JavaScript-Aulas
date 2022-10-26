const { gets, print} =  require('./funcoes-auxiliares');

const quantidadeDeAlunos= gets();
let maiorValor= 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado= gets();
   if (numerosSorteado > maiorValor) {
    maiorValor = numerosSorteado;
   }
}

print(maiorValor);